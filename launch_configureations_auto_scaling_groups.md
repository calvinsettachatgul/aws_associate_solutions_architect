launch configuration and auto scaling groups 
------------------------------
create a healthcheck.html file 
upload the health check file 

now have an index and a health check 
now need to reacreate the elastic load balancer 

created elastic load balancer 

myapplicationelb

on the default vpc 


getting the following warning:
------------------------------

Improve your load balancer's security. Your load balancer is not using any secure listener.
If your traffic to the load balancer needs to be secure, use the HTTPS protocol for your front-end connection. You can go back to the first step to add/configure secure listeners under Basic Configuration section. You can also continue with current settings.

choosing security groups 
mywebdmz and default 

create a launch configuration group 
this is similar to creating an ec2 

provision from snapshots?


amazon linux ami 
t2 micro
use the previous bootstrap script 

update the script 

#!/bin/bash
yum update -y
yum install httpd -y
aws s3 cp s3://mywebsitebucket-calvin/* /var/www/html --recursive
service httpd start
chkconfig httpd on

* **
create an auto scaling group 
run health checks off of elb
grace period 
length of time before performing a health check 

this worked on another ec2 
aws s3 cp --recursive s3://mywebsitebucket-calvin .
aws s3 cp --recursive s3://mywebsitebucket-calvin /var/www/html

***

something 
