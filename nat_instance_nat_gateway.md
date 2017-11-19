nat instances and nat gateway
------------------------------

install in public subnets 
created custom vpc 
route tables 
    auto private 
    public 

private subnet associated with default route table 

deploy into private subnet cannot access the internet 
allowing port 80 
port 22 from the world 

web traffic and ssh and icmp from specific address range 
    with private ip address 

what do we want to do ?
database server 
internet access

prevent
directly being able to access

use nat instance or a nat gateway 

nat gateways released 2016

prefer to use in production 
scale 
no security group 
patch already for you 

nat instance 
ec2 acts as a gateway 
then delete it 
install nat gateway 

launch an instance 
go to community ami search for nat 

put it in public subnet
launch the instance 

use webdmz
security group 

create a route out 

actions networking 
change source destination check 
default any ec2 has to be a source or destination for traffic 

disable source destination check 
last thing create route from private subent to nat instance to internet 
have our public route 
has route to internet gateway 

add another route to main route table 

add 0.0.0.0/0 and myNAT 

in the terminal window 

now the ec2 in the private subnet can access internet and download packages

delete the nat instance 

terminate the nat instance 

in theory ec2 in private subnet no route to internet

go and create an nat gateway 

deploy nat gateway into 
public gateway 
elastic ip create

edit route to include destination of nate gateway

dont need to disable source destination check 
    dont need to put it with a security group 
takes a couple of min to prepare the nat gateway 

you dont have to maintain them yourself 

created a nat instance 
updated route table through nat inst to the inernet 
    disable source dest check 
nat is a single point of failure 

lose interet access in the private subnet 

autoscaling group? min number to 1 
want to have >1 pub subnet 

starting to use nat gateway 
    dont have to worry about management

rds security group 

to the internet gateway 

always in the public subnet 

specify the route tables 
    no security patches 

docs. aws.com 
    /vpc 
    userguide 
    networking nat inst vs gateway

highlyavail 
redundant 

script to manage failover 
    burst up to 10 gb per second 
    nat instance depends on the bandwith of the instance type 
    failover if surge 
    common scenario 

nat instance cant cope 
    then scale up 
    or change the inst family 
    support greater network volume 

nat gateway already built in 

nat instnace is generic amazon linux ami 

depend on how you use the nat instance 
    can be cheaper 

scroll down security group 
    cant associate nat gateeway
    with security group 

network acl 

always in production over nat instance 
    dont have to worry about single points of failure 

nat instance around since ec2 
    feauture in the exam 
    not as relevant 

creating nat instance 
    disable source destination check 
    must be in public subnet 
    1 subnet = 1 az

route out of private subnet to to the nat instance 

deploy a  nat must have a public ip address 
    must allocate a public ip address 

solution traffic supported is increasing size 

create high az 
    autoscaling 
    multi subnet 
    automate failover 

behind security group 

nat gateway the way forward 
    may not be in the exam 
prefered by enterprise 

auto scale 
no patch security 
no security groups 
auto assign public ip 
remember update route table to point to nat gateway route to internet 

no need to disable source/dest checks 

security groups vs network acl 

secruity group vs network acl 
