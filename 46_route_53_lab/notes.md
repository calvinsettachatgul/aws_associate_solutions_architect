using route 53
basics of route 53

go over and login to aws


launch an instnace

use a t2 micro keep settings the same

bootstrap script

#!/bin/bash

yum install httpd -y
service httpd start
yum update -y

echo "Hello Cloud Gurus" > /var/www/html/index.html

this is the bootstrap script

installed apache updated and create an index.html

leave everything default and tag as my web server

use existing security group that lets port 80 in 

go ahead and launch it and use existing key pair
pause the video
webserver onlin

instant state is running

create a load balancer

my elb

leave the rest as default

use my webdmz security group

configure health check off index.html

add ec2 instance add tags

take sometime to pass health checks

elastic load balancer is in service

ready to go

route 53
first time loggedinto this account

create hosted zone

create one


use domain name that i've bought

aforceguru
to teach salesforce

creates 2 records by default
start of authority record
also name server records

cut and paste name server record

go to godaddy and go daddy's splash screen change the name servers

custom one 

add custom name server
add antoher
do it for all 4 

entered 4 different ones

changes my take a few moments to connect

now that i've done that 2 dns records
here 
configure zone apex record

record set

tell where to go

naked domain name  can only be an a record

create an alias

enter a target address

created an a record

has not reolved yet

pause for 5 min and refresh the screen

refresh the page
resolves to a cloud guru

aforce goes to aws

different routing policies for route 53
create a new record set and routing policies

simple weighted latency fialover geolocation

hello welcome
to new lecture
