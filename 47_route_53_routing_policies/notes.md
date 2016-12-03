choose the best routing policy

what are the different routing policies

simple weighted latency failover geolocation

simple is the default when create new record set

no intelligence and it is the default

differetn weights applied


what do these do?
***simple***
create a new record set
single resource that performs a simple function for your domain

one web server

basically user
with dns query
hits route 53

redirects to us-east-1
in a specific region
ec2

simple -> means no intelligence default routing policy

***weigthed***
weight based on weight assignemnts
user -> dns to route 53 
20% traffic to us-east-1
80% traffic to us-west-1

different elb splitting
in different az

split traffic regionally
different versions of website A and B testing

only want to test on 10% of your clients

send remainder of traffic to exisitng production website

a and b testing

check out devops pro course
a lot of detail how to do that

***latency***

based on lowest network latency of end user
give them the fastest response time

route 53 is global

what is happening?
receives query
then lowest latency
value that is associated with that record 
set

south african user
300ms
54ms

send to lower latency eu-west-1

improving page load time for different users around the world

ec2 instance in every region then set up latency based routing

always get the lowest possible latency

***failover***
active passive setup

primary and seconary

monitor health of primary using health check 
if you have a failure
	AZ outage all ec2 instances in 1 az then failover to disaster recovery site

passive site is eu-west-1

failover in us-east-1

then sending traffic to eu-west-1 there is a failover

***geolocation routing***
based on geolocation of users

keep all from europe 
to go to specific customized ec2 to europe

europen -> route 53
routed to eu-west-1

us based -> route53
routed to us-east-1

right traffic to right location
exam tips

routing policies and use cases

simple
weighted
latency
failover
geolocation

choose which is the best routing policy

no lab for routing policies for this course

sysops yes
important to know how to configure that

sysops really good to be hands on for that

have any questions then move on
