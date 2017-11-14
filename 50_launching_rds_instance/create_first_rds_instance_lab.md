
lab: create our first rds instance
------------------------------

in this lab create first rds instance  
create web server 

create rds instance 
connect webserver to rds instance 


this is a lab log into console 
get started now 

use mysql
dev test one 
use it in free tier 

scroll down to sql t2 micro 

free tier 
not multiaz

leave as default 
settings 
db instance identifier 
use the same username password  

confirm and hit next 
into default vpc default subnet 

not publicly accessible 
no pref on az 

create a new security group 

everything else default and lauanch db instnace 
you'll beable to see creating database 
see the launch group secruity group launch 
inbound rules 
to spec ip address 
edit this 

change not to come from this ip address want from webdmz security group 

from webdmz on port 3306

real life and exam 
rds instance not publicly accessilble then open up the security group of the security group 

go back to rds still spinning up 

spin up an ec2 
use the bootstrap script 

php and mysql 
secruity patches 
turning on auto start apache 
creating a webpage 

also output to /var/www/html directory

get file connect.php
from the bucket location 

attached to resources section 
paste to advanced details 

call it myweb1
add into security group 
webdmz 
rds security group allows 3306
over port 3306
review and launch 

launch the instance 

launch the instance 

wait for ec2 to come live 
wait for rds  to come live 

now ssh into ec2 instance 
php info page 

ssh into ec2 instance 
connection stream 

ssh to ec2-user@<public_ip>

connect elevate priviledge 
cd /var/www/html 

connect.php file 
now at browser /connect.php
unable to connect to mysql 

check that mysql is live 
copy the endpoint 
acloud.guru.eu-west-2/rds

copy to clipboard 
go back to terminal 

change the connect.php 

update with the host name 
your host name paste in the end point 

update the host name 
paste in the endpoint 

refresh the ec2 end point 

lets do one more test in ec2 in vpc 

go in and go to security groups 

delete the inbound rule 

refresh the page 
see that the web page is waiting 

you can fix that 
cant connect to rds 

allowing port 3306
trusting the web dmz security group
deleting the rds instnace 

go to delete creating a final snapshot?

clearned up the 
    terminal window being sad 

create a word press site 
install on ec2 server 
deploy wordpress db on rds instance 

move onto autoscaling


