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

in mydmz
default vpc
internal or external load balancer?
internet facing?


enable advanced vpc configuration 

listener configugration

protocol and port 

instnace protocol and what port to direct it to 

send all all port 80 traffic to port 8080

port 80 to port 80

assign security groups

notice assign to multi security groups at once

click next

improve load balancer security because not using ssl

don't have any ssl certificates

configure health checks

load balancer
queryies a file or pathway 
depending on results brings load balancer into or out of service

path will be the healthcheck.html
response time out

time to wait when receiving response

2 to 60 seconds

health check interval

amount of time between each health check


unhealthy threshold
maeans load balancer will attempt to resolve to file
it will do it twice
if it cant then it will bring the load balancer into service

10 times check if can resolve then it will 
