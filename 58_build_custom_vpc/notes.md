build out your own private vpc

custom vpc

2 different subnets public and private
2 different ec2 in 
see if we can access through public
or internal


this is hands on 

build out custom vpc from memory

then build out your own custom

log into aws console
using the new ui
go to networking

there is a start vpc wizard
but we will be doing it manually
not going to use the wizard need to do this before the exam

this is our vpc dashboard

see a start vpc network

need to know how to do this for exam how to do it yourself!

go to custom vpc

your vpc and create vpc

name tag
myVPC

CIDR block
classless interdomain routing
tenancy

3 ip address ranges
typcially used for internal network addresses

can't have a cidr block larger than
10.0.0.0/8
10.0.0.0/16

lets try it with a /8
	throws an error message

need to do it as a /16
	neet do do it as this this is the largest we can have

then you have tenancy
	by default its always shared
	can select dedicated

shared hardware or dedicated

if you have security things regulatory requirements


don't do that because it is expensive


can take 1 or 2 seonds
there we go created vpc

vpc id's 
cidr addrss range

default vpc is 172 address range
using 10.0.0.0/16

network acl's

hasn't created any new subnets

when create vpc does not automatically create subnets

creates root table
network acl

created a vpc
route table
route tenancy
default security group


preexisting security groups

go into subnets

there are 2 subnets
these are for our default vpc's
has not created any new subnets

if go to route tables has created a new route table
this is the main route table
created automatically

default security group for this vpc

has created also 
default network acl's

when create vpc
does not create subnets or internet gateway

but does create route table
network acl
and security group

what have we done visualization

by default has created route table network acl and security group

no subnets available yet

have to create subnets

creeate 2 subnets
naming convention
address range naming convention

also what AZ that is in 
in this instnace eu-central-1a

myvpc
vpc

cidr blocks 10.0.1.0/24d

create a subnet will always be in 
az
us-east-1b

important to remember

1 subnet = 1 az

can see how many available IP addresses

create 2 of these 2 subnets

1 is a public 1 is a private

attach a way for the internet to connect  to this vpc

251 ip addresses available

make things public and private


go to internet gateways
myICW

not attached not doing anything not doing anything

by default it is dettached

can you boost interent speeds by attaching to multiple gateways

can't attach multiple internet gateways to a vpc? no 

can you attach multiple igw's to a vpc?

no you can't!

igws are highly resiliiant

internet gateways can attach to the internet and apply yum updates

do that in the route tables

if create a new subnet then by default will have a route out from main route table

don't want a route out on main route table

associate myPublicRoute to a subnet

one last thing before deploying ec2 instance into it

see subnet and the public subnet

then auto-assign public ip is no

modify auto-assign IP settings


enable auto-assign public IPv4 address

creating a new subnet will  always be associated with main route tablek

assocated a subnet to the route table

everytime deploy ec2 within a subnet will assign auto asign an ip


deploy an ec2 with myVPN

write a bootrap script

#!/bin/bash

yum install httpd -y
yum update -y
service httpd start
chkconfig httpd on
echo "<html><h1>Hello Cloud Gurus!</h1></html>" > /var/www/html/index.html

call it 
MyWebServer

new security group

#!/bin/bash
yum install httpd -y
yum update -y
service httpd start
chkconfig httpd on
echo "<html><h1>Hello Cloud Gurus!</h1></html>" > /var/www/html/index.html
