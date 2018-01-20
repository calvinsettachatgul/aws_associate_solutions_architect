failover routing policy 
------------------------------

health check fails then send traffic to alternate 
health check passing send traffic to london 

active site 

passive site is sydney 

then you have an outage 
active site fails health check 
route53 sends traffic to sydney 

deleting ec2 instnaces and see route53 respond 
before 
create record set 

create healthcheck 

elb for primary site 
copy the dns name 
go back to route53 and go to health checks 
ip address based or domain name based 

call myLondonHealthcheck

check an endpoint as the dns of elb 

if both instances go down then health check will fail
health interval set  10 sec 
    fail after 1 

leave as default 
    creating alarms? 
create a london health check 
now create on entire website 

myproduction site 
    change it to domain names 

hellocloudugurus.com

this is going to be fast failover routing 

create a new sns topic 
mywebsite is down 

enter email address 
health checks take some time 
checking elb dns name 
have not configured any zone apex records in route53 
click refresh one is healthy and one is unhealthy 


create first record set 
click on the primary website 

myLondonELB

change the routing policy to failover 
    specify primary is the production 
    target health 

associate with healthcheck 

click on there health check is the entire website 
    health check is not going to work 

use the elb dns name 
    get rid of error message 

resolving to london elastic load balancer 
now create a secondary record set 

failover to sydney 
    use failover routing 
secondary site and no


secondary here 
open up a new tab hellocloudgurus.com

resolving to london and primary site 
simulate a failure 

stop both ec2 instances 
primary and secondary 
this will take 30sec to stop 
they are both stopped 

services netowrking route53

expect london health check is down but entire website is still up 
take sydney off line 

change our region to sydney 
some latency 
click on one running instance 
on dr site 
now stop the instance 

go back to route53 and health checks and know our health check has failed 
go to ec2 and go back to london region and boot everything back up and website comes back online 

go into running instance and actions instance state start 
    health check should coming back healthy 

both health checks healthy 
