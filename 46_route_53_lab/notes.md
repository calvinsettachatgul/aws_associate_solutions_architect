using route 53
basics of route 53

go over and login to aws


launch an instnace

use a t2 micro keep settings the same

write a little bootstrap script

start with the shebangs
#!/bin/bash

yum install httpd -y
service httpd start
yum update -y

***create a web page***
echo "Hello Cloud Gurus" > /var/www/html/index.html

this is the bootstrap script

***this is what we've done bootstrapping***
installed apache updated and create an index.html

leave everything default and tag as my web server

use existing security group that lets port 80 in 

go ahead and launch it and use existing key pair
pause the video
webserver until webserver online

instant state is running

***create a load balancer***
create a load balancer

myelb
ireland?
leave the rest as default

use my webdmz security group
web de militarized zone
configure health check off index.html
lower the health check constraints

add ec2 instance add tags

take sometime to pass health checks

elastic load balancer is in service
that is great

ready to go

go back to 
route 53
first time loggedinto this account

create hosted zone

create one

use domain name that i've bought
bought trhough godaddy

aforceguru
sales force training academy
to teach salesforce

publicly hosted zone or vpc hosted zone

creates 2 records by default

4 different values
top level domain name is always different as well
a lot of redundancy

cut and paste name server record

go to godaddy and go daddy's splash screen change the name servers

ns .domain control .com
custom one 

add custom name server
add antoher
do it for all 4 
hit save!
few minutes to take effect

entered 4 different ones

changes my take a few moments to connect

now that i've done that 2 dns records
here 
configure zone apex record
naked domain name
tell naked domain name where to go
without the www

record set

tell where to go

naked domain name  can only be an A record
aws won't give you a public ip of elastic load balancer

create an alias
different routing policies
created our A record aforce.guru

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

type in aforce.guru

has not resolved yet

may take sometime
refresh the page again
now resolveds to aforce.guru

naked domain name now points to elb which resolves to ec2 instance

that's it for this lecture

then cover different routing policies

these are the rooting policies
