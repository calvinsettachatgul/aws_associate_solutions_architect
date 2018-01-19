load balancers

elevate priviledges

sudo su

cd /var/www/html

create a new file called health checks

vim healthcheck.html

put in there 


Hello Cloud Gurus, This instance is healthy.

save and press enter

then see it exists

back to aws console

go to ec2 we have 1 running instance and a couple volumes

go to load balancing
it has its own section

right now don't have any in this region

create a load balancer

MyClassicELB

in mydmz
default vpc not advanced 
internal or external load balancer?
internet facing?


enable advanced vpc configuration 

listener configugration

protocol and port 

instnace protocol and what port to direct it to 

send all all port 80 traffic to port 8080

port 80 to port 80

assign security groups webdmz
use the webdmz security group that he created earlier
can assign multiple security groups at once

notice assign to multi security groups at once

click next

improve load balancer security because not using ssl

don't have any ssl certificates

configure health checks
    this is the guts of the elb
	this is really important
	load balancer queries a file
		will bring the load balancer in service or out of service

what is the ping path 

load balancer
queryies a file or pathway 
depending on results brings load balancer into or out of service

path will be the healthcheck.html

there are advaanced details 
response time out
    time to wait when receiving response

2 to 60 seconds
	min to max up to 60 seconds

health check interval
	this is the amount of time between each health check
    between each check 5 sec to 300 sec 

amount of time between each health check


unhealthy threshold
	default value of 2
maeans load balancer will attempt to resolve to file
	check into this file 
it will do it twice
if it cant then it will bring the load balancer out of service

10 times check if can resolve then it will 
		healthy chekc
		10 times and 10 successful results then it says the load balancer is in service


2 x 30 seconds to register offline
	
may want to lower it and not have a weberver dead for 1 min before notification

	change it to 10 seconds x 2

healthy threshold 3 times
and 10 seconds between checks

add our ec2 instances
	within the default vpc and the web server instance
    add webserver to it 

going beyond free tier accidentally leave on the elastic load balancer 

cross zone load balancing
distribute load evenly
across all AZ

connection draining
# of seconds to allow  existing traffic to continue to flow

add tags key value pair to track costs

cross zone load balancing across all availability zones

part of the developer group

review and create and click create

go ahead and click close

load balancer is currently out of service

under the instances section
	instance is out of service

create a new healthy.html 

refresh button 

bring it all the way to the top now we are going to wait
the instance will come into service

the service is in service

doesn't come back on?
check the health check and resolve the url

	can see healthcheck.html resolves

then if can't then something is wrong with the security groups

check the status of apache

service httpd status

have not configured apache to restart on reboot?

common thing to cause this security group section did not restore outbound rules to all ports

hopefully able to resolve

dns name points to index.html 
dns resolution 

last thing you want to point out

description with DNS name and a record

DNS name you can use 
	resolve the index.html using the DNS

elastic load balancer never given static IP address
resolving multi ec2 behind elastic load balancer then only DNS no public IP

in service or out of service depend on the healthchecks

elastic load balancers have own dns names 

2 different types of load balancers 
    application 
    classic


no public ip for load balancer 
only dns name

public ip addresses can change 

create the second type of load balancer 
    application load balancer 

learn it in depth?

similar to classic 

    MyApplicationELB

    listeners 
    http

available subnets 

add them in 

load balancing across 
eu-west-2a
eu-west-2b

routing and target groups 

target group 

MyAppELBTG
update the port to 443

path 
/healthcheck.html

traffic port
override to a specific port 

2 failures will take it out of service 

time out is 2 seconds 
intervals as 5 sec 

http codes 
200 

200 to 202 
a range 
200 to 299

add to registered targets 

hit create 

an application load balancer 
go in and test it 

dns for alb 

dns for elb 

wont get an ipv4 address 
always get dns address 

look at listeners on port 80

monitoring stats 
    number of http errrors 

    server side error
    client side error 

got our tags 

grab the dns name 
    put it in the clipboard 

app load balancer is working 


