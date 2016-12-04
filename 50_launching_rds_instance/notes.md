lab will create an rds instance with a web server that will connect to rds instance

logged into console go over to ec2 

create my web server

have you running instnace still then delete
?

delete load balancer


done that and luanch new instnace

amazon linux t2 micro leave standard except bootstrap script

available resource

go to a new tab and go to an address

s3-eu-west-1.amazons3

cut and paste into browser

what does it do?

swtich back to text wrangler
shebang
and path to interpreter

#!/bin/bash

yum install httpd php php-mysql -y
yum update -y
chkconfig httpd on
service httpd start
echo "<php phpinfo();?>" > /var/www/html/index.php
cd /var/www/html

just keep everything default click next
call it web1 

use security group web dmz

launch and use existing key pair

pausing video
create a new security group

call it my rds security group
put it in as description
default vpc
go a head and create

for rds instnace

cross over and create rds instnace


close this down here
go to get started now
straight away select you engine

6 rds db available
before there was only 4

added mariadb
added another one

production?
use mysql

keep everything the same
dbinstance class

t2 micro multi az no

leave everything as default
have an identifier
acloudguru
acloudguru
acloudguru 

username and password and confirm

hit next

current selection is available for free teier

right now no for multi az configure networking
default vpc

publicly accessible?
no

az ?

no preference

vpc use rds security created earlier

a cloud guru

enable encryption?

going into the exam can encrypt at rest

go down to back up window

going to do backups and backup retention will be 7 days

leave it at default values
and hit launch

takes some time 10 min 

click view and see that it is creating

go back to ec2

what do you want to see?
bootstrap has run successfully?

2 wyas

ip address and go there!
then you see index.php page

running php info
installed php successfully able to execute

also mysql has been installed

another thing 

/connect.php

unable to connect to mysql

connect to rds db but it can't connect!

objective is to be able to connect

if able to open connect then this is what it is doing!

~/Downloads/connect.php

unable to connect to mysql

select usernames and passwords

go back to rds console it has not yet been provisioned
still creating
wait for it to be created while waiting can fire up terminal window

want to add to the terminal winodw some connection strings



ssh ec2-uwer@<ip address> -i myec2.pem

elevate priviledges

cd /var/www/html

see 2 files
connect.php index.php

see that script

need to update the hostname to point to our rds instance

back to our console

and go ahead and refress
go in and get the rds endpoint
that will become the address
go back to the terminal window
fix the space

and there we go!

ctrl x nano!

hit enter

go back to the console

refresh the browser
won't be able to connect

2 different security groups

web server security group talks to rds secruity group

click on security groups ec2 or vpc

go to security groups and edit
what do you want to do?

allow mysqlaurora

customIP

the letter s

webdmz security group

hit select and hit save

inbound rule for webserver to communicate with rds

connected to mysql using username....
have successfully connnected to rds instance

created a web server
allowed a collection through security groups

multi az using rds

read replicas and differences between them


