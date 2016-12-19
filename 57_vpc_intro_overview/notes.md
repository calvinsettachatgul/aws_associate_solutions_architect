VPC Overview
------------------------------

high level overview of what vpc
section of course is exactly the same in these 3 exams associate level exams

essential to know vpc in all 3 associate level exams

sysops admin a little more detailed
few more 

need to know this inside out
cover that offf

preparing for 3 exams
simultaneouly


need to know by memory
build out your own vpc by yourself
at the end of this section from memory
smash any network questions

from memory
launch instances from  public and private subnets
ping them also

this section of the course

this is very hands on
this is fun
network topology

what is a vpc?
------------------------------

logical data center
aws regions all around the world
deploy vpc into different regions
***vpc do not span regions***

do span azs
can span

how does aws define what a vpc is?

complete control over virtual network environment

learn more about htis in a practical fashion


help control access to ec2 instances in each subnet
leverage aws cloud with corporate data center

as we go through build out our own vpc

red line on the outside us-east-1 

vpc define the ip address range
configuration of route tables and network gateways

network address range there is a document
public facing subnets
that defines 3 different private ip ranges
private facing subnets with no internet access
	protect db
	application servers
help control access

create hardware vpn

hybrid cloud on premisise and on aws
	extend data center up into aws

internal network address
vpc diagram
------------------------------

red line on outside is the region

slash
slash 3
slash 12
slash 16

3 different ip address ranges

192.168/16 

maximum addressable size
	that aws gives you is /16
	this is the largest network size
most of the time use 10.0.0.0/16
network address

lets see how it actually works
2 routes of entry
	into vpc
		internet gateway

		have virtual private gateway terminate vpn connections
		as well
		terminate the vpn connection

site to site vpc 

traffic comes in it will be routed
	how do we define in our route tables

network address range

3 differen private ip address ranges

virtual private gateway

how is it rooted?

goes through network access control list

this is the second line of defense
through the network acl

and different subnets
private or publci
refers to internet accssible

internet accessible?

in the public
web servers or 
bastion host or jump box

private 
	database or application servers
anything you want to protect

subnets and security groups

security groups and network acl's cans span subnets
	span subnets!!

subnets have different addresses
	each subnet mapped directly to an az
	
instances

think about 
subnet have different ip ranges

each subnet mapped directly to an availabity zone

1 subnet = 1 az
	can't stress this enough!!!
	can't span subnets across multiple availability zones

can't span subnet acrouss multiple az

sounding a bit confusing? 
	go into labs this gets easier
remember 1 subnet = 1 az

remember by addresses

security groups can span multi subnets  and network acl's route tables

definitely worth a few questions on the exam
	

what can you do with a vpc
------------------------------
	launch instances into a subnet of your chooosing
		public or private
	assign custom IP address ranges in each subnet
	configure route tables between subnets
		define subnet is public is private
	create internet gateway and attach it to our vpc
		only have 1 interent gateway per vpc

attach it to our vpc 
remember only 1 intenet gateway per vpc

internet connection running slow how to make this better?

one internet gateway per vpc
	can't attach multi internet gateway

how to boost internet speed to vpc? question

much better security over aws resources
	allows:	create instance security groups
	

instance security groups they are stateful!
	create a rule incoming then outcoming also by default

http allowed in then auto allowed out

subnet network access control lists ( acls) they are stateless
	create a rule allowing http traffic in into acl
	also have to create  arule allowing outbound

lecture on vpc security
	this is important 
	difference between security group and nac list

security groups vs network access control lists

default vpc vs custom vpc
------------------------------

create aws account default vpcs in every region aroudn the world
	easy for you to deploy ec2 instances easily

deploy immediately 
make it as simple as possible

with default
	all subnets have a route out to the interent automatically
	all public
		no such thing =>

no such thing as a private vpc with default vpc
have to go in and create it

each ec2 instance has both public and private IP address
if you delete default vpc the only way to get it back is to contact aws

have to raise a ticket 
	aws will restore default vpc
	
vpc peering
------------------------------

lecture dedicated to this

multiple vpcs within a region 
	connect one vpc to another

via direct network route using private IP addresses
	route that won't go out over the inerenet

connect to production

test dev production vpc
connect these all together

direct network connection over private IP addresses

instances behave as if they were on the same private network

you can peer VPC's with other aws accoutns as well as with other VPC's

vpc test dev and production

cannot do transitive peering
what is transitive peering?
	just remember this

star configuration
of peering

5 vpc's abcde

need to set up links individually cannot do transative peering
all vpc talk to each other then you have to set up all the links directly

no such thing as transitiv peering

hopefully that makes sense
popular exam topic
very patient

exam tips?
------------------------------

vpc as a logical datacenter in aws
internet gateways
	or vp gateways
route tables
nac list
subnets 
security goroups

consists of IGW's or vitual private gateways
route tables
network access control lists, subnets, security groups
1 subnet = 1 AZ
security groups are stateful
	network access controll lsist are statelss

no transititve peering
cannot do transitive peering
	one vpc to another via a 3rd vpc
	there is no transitive peering

same aws account or different aws accounts does get easier


build own custom vpc

build out custom vpcs from memory
	this will really help you in the exam

learn heeps in the next lecture

then you will be set to smash any network question

exam tips about vpcs
join me in the next lecture
