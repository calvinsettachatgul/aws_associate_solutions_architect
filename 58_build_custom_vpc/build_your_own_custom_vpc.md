build your own custom vpc 
------------------------------

create a vpc 
there is a wizard but need to know how to do this yourself

cidr block 
classless interdomain routing 
specify the ip address range 

10.0.0.0

cant have a cidr block larger than /16
/16 largest you can have 

shared or dedicated tenancy 

create a custom vpc

auto create a default security group 
auto create a default network acl
auto create route table main 

created a subnet spanning one availability zone 

how many ip addresses available?
    251

3 different ip address ranges used 
3 addresses reserved by aws automatically by aws 

create a second subnet

now have 2 subnets 
in 2 different az 
public and private subnets 

internet gateways to access the internet 
create an internet gateway 
is created and it is detached 
attach to myVPC


can you increase internet performance speed by adding multiple igw?
no!! 
you can't attach mulitple igw to a vpc in a region 

create a route out to the interent 
yum update 
security updates 
installation of packages 

a route is created by default 
to be able to talk to each other 
main route table 
    leave it the way it is to make sure connection is private 

new route table my public route 
any assocated with this will have a public route out to internet 

add another route 
    to the internet 
    0.0.0.0/0 
    given routetable out to the internet 
associate subnet to this route table 

associate the public subnet with the public route table

auto assign public ip addresses?
says no 
now modify auto assign public ip 
enable auto assign 

everytime deploy ec2 to this subnet this will auto assign public ip address to it 
other subnet is left at autoassign no 

default subnets are auto assign public ip no 

launch a couple of ec2 
use the new vpc not the default vpc

use the subnet setting 
you can also hit enable 

use a bootstrap script 
shebang 

#!/bin/bash
yum install httpd -y 
yum update -y 
service httpd start 
chkconfig httpd on 
echo "<html><h1>Hello Cloud Gurus!</h1></html>" > /var/www/html/index.html

add our storage as default 
my-webserver

configure security group 
create a new security group 

port80 and 
ssh 

hit review and launch 
hit launch with key pair 
existing key pair 

launch instances 

view our instances 

provision an elastic ip address 
allocate a new address 
assign the elastic ip address 
release the address 
go back to ec2 dashboard 
should have come up 
how long the bootstrap script takes to run 

access via http 
ssh also 
using public ip address 

what have we created review 

created a vpc 
in that vpc attached igw
default route table 

withanother route table 
pointed all our traffic to the igw 
created a network acl 
one at the moment 

private and public subnet 
    associate public with public route table 

next lec 
    deploy into private subnet 
    have the ec2 talk to each other 

private ip 
10.0.2.189


ssh into public ec2
public ip address 
34.201.20.188

ssh into the public instance 
ping the private ip 
copy the private key pem 

remove the ssh 
to break the ping
the connection has already been established 

take effect immediately 

add icmp traffic back the rds secruity group 

go back to ec2 instance and go back and start pinging 
create a new document 
a private key 

add file and change permissions chmod 0600 the file 
now can ssh into the private instance 

we are in the ec2 instance in the private subnet 

network address translation 

install mysql 
and security patches 
