bash scripting

ec2 will run this
when it starts up

install apache
updates
security updates
security patches

take a file in s3 to apache directory and create a web page for us

move to s3 

open up a text editor

hello cloud gurus, i am now alive

save as html file

save it as index.htm

save it to documents
index.html

go over to aws console

take a note of what region we are in go over to s3 and create a new bucket

a cloud guru website bucket

contains website code

bucket is the same as the region that the ec2 will be launched in

if not code may slightly change

in that bucket go in and upload the file
index.html
click ok start upload

bucket is private

click on properties
nobody can access except him

go over to console and amazon linux ami 
t2 micro change the role to s3 admin access

this is the advanced details

this is where the bash script

type it in as text

start with the shebang

#!/bin/bash

this is the path to the interpreter

yum install httpd -y #forced with -y

# apply updates
yum update -y

copy index.html from bucket to ec2 instance

aws s3 cp s3://acloudguruwebsitebucket/index.html/var/www/html/

move the object to 

service httpd start


checkconfig httpd on

essentially installs apache updates apache

moves file to apache root directory add storage

gen purpose ssd

bash instance
name

hit next

select existing security group hit review and launch


come back and see some failed tests

s3 bucket was using and created in the korean region

if using ec2 in ireland have to tweak the code

in theory navigate to ip address and see the webpage that he created

come back online and go to public ip enter it into browser

hello cloud gurus i am now alive

now you can see how to automate things

move from s3 to ec2 instance

all these building blocks

with aws

build a resiliant website


