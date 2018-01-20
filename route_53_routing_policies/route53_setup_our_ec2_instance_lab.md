route53 setup our ec2 instance lab 
------------------------------
demonstrates routing policies in route53

log into console 
aws console 
take a note of region 
select region close to physical location 
provision 2 instnaces 

provision elb 
launch instance 
amazon linux ami 
t2 micro 
add a bootscript 

httpd 
service 
simple html page 
hello cloud gurus this is X
write to index.html 

this is london webserver 1
paste the script into ec2 
Name LondonWebServer1
use existing security group 

https and ssh open to the world 
use existing key pair 
create london web server 2
advanced details 
change to london web server 2 

london web server 2 
use my webdmz

launching 2 different ec2 instances 

create an elb 
new load balancer 
hit continue 
do it on port 80 
assign security groups 

my london elb 
add security groups 

configure  a health check 
make it interval of 10 seconds 


testing the ip address 
doing a hard refresh 
the elb will alternate between the 2 ec2 instances 

2 instnaces behind an elb 
go to a region that is far away from you as possible 

completely at the other side of the planet 
create an ec2 and an elb

launch an instance 
t2 micro 
paste in the bootstrap script 
hello cloud gurus this is sydney web server 1 
instead of london 

create a new secruity group sydney dmz

add in port 80 and thats it 
cidr address ranges ipv4 ipv6 also 

new key pair 
download it and launch instance 
launced sydney instance 

click on load balancers 

leave everything as default 
my sydney elb 

configure health check to 10 sec 
health check to 3 

add our tags and create 
created sydney elastic load balancer 

copy the public ip address 
took longer 
    trying to resolve address 

hello cloud gurus this is sydney web server 1 


go over to instances and its out of service now its back in service 
    check that you can resolve the dns name 
    for the sydney elb 

have 3 instances 
start the route 53 part of the course 
