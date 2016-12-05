section of course is exactly the same in these 3 exams 

need to know this inside out
cover that offf

preparing for 3 exams
simultaneouly
build out your own vpc by yourself

this is very hands on

what is a vpc?

logical data center
vpc do not span regions 

do span azs

how does aws define what a vpc is?

complete control over environment

learn more about htis in a practical fashion


help control access to ec2 instances in each subnet
leverage aws cloud with corporate data center

as we go through build out our own vpc

red line on the outside us-east-1 

vpc define the ip address range

network address range there is a document
that defines 3 different private ip ranges

internal network address

slash

192.168/16 

lets see how it actually works
internet gateway

have virtual private gateway terminate vpn connections


virtual private gateway

how is it rooted?
goes through network access control list

this is the second line of defense

and different subnets
private or publci

internet accessible?

bastion host or jump box

subnets and security groups

security groups and network acl's cans span subnets

instances

think about 

each subnet mapped directly to an availabity zone

1 subnet = 1 az

can span subnet acrouss multiple az

sounding a bit confusing? 

security groups can span multi security groups and network acl's


definitely worth a few questions on the exam

what can you do with a vpc
	launch instances into a subnet of your chooosing
	assign custom IP address ranges in each subnet
	configure route tables between subnets
	create internet gateway and attach it to our vpc

attach it to our vpc 
remember only 1 intenet gateway per vpc

internet connection running slow how to make this better?

one internet gateway per vpc

much better security over aws resources

instance security groups they are stateful!

http allowed in then auto allowed out

subnet network access control lists ( acls) they are stateless

lecture on vpc security

security groups vs network access control lists

create aws account default vpcs in every region aroudn the world

deploy immediately 
make it as simple as possible

with default
	all subnets have a route out to the interent automatically

no such thing as a private vpc with default vpc

each ec2 instance has both publci and private IP address
if you delete default vpc the only way to get it back is to contact aws

vpc peering

multiple vpcs within a region 

via direct network route using private IP addresses

connect to production

test dev production vpc

direct network connection over private IP addresses

instances behave as if they were on the same private network

you can peer VPC's with other aws accoutns as well as iwth other VPC's

what is transitive peering?

5 vpc's abcde

need to set up links individually cannot do transative peering

exam tips?

vpc as a logical datacenter in aws

consists of IGW's or vitual private gateways
route tables
network access control lists, subnets, security groups
1 subnet = 1 AZ
security groups are stateful
	network access controll lsist are statelss

no transititve peering

same aws account or different aws accounts does get easier


build own custom vpc

build out custom vpcs from memory

then you will be set to smash any network question

exam tips about vpcs
join me in the next lecture
