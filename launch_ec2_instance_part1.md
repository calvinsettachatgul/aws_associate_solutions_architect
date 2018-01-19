launch ec2 instance part 1
------------------------------

for all of course 
using amazon linux ami
python ruby perl java

default delete on termination 

free tier only 
t2 micro

m4 
main choice for application servers 

d for density

main set up page 

security groups are vitual firewall

purchasing options 
spot instance 

request valid from and to 

there is tenenacy and dedicated host 
https://acloud.guru/course/aws-certified-solutions-architect-associate/learn/ec2/launch-instance/watch

sudo su
yum update -y

install apache and create a webpage and webserver
install apache 
yum install httpd

cd /var/www/html
create an index.html 
Hello Cloud Gurus

service httpd start
