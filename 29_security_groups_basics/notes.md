security groups
default
web-dmz

edit a security group and that rule takes effect immediately

ssh into our webserver
install apache

create a small text file and navigate to browser

important to realize before the exam
disable http access only ssh in
ssh
install apache to create server

create a text file to navigate with browser

sudo su
elevate the priviledges to root

yum install httpd -y

next thing we want to do is enable the service

service httpd status
service httpd start
then you get an ok message

way to start up automatically
if you restart the instance
the way you do that?

chkconfig httpd on

navigate to
/var/www/html

this is the root directory for the web service

sending a request to the public ip address but won't go through because of security groups

click on web-dmz security group it does not allow http

now created the first web server
create first website

propagation of security group instantly

look at management console
look at inbound rules
everything is denied by default

can't deny protocols
can only add 



allowing http in
then delete all outbound traffic

why does that happen?
security groups are stateful!

don't have to create a separate outbound rule
with security groups if allow a port or protocol automatically it will be allowed out again

don't have to create a separate rule to allow back out again

can break things later on in the course

edit all traffic destination anywhere

created first webpage hello cloud gurus allowed web traffic to the website

propagation instantly to access the page

denied by default
but can't add a rule to deny a specific protocol -> can only allow rules

with outbound can't deny to go out 
can only allow specific rules coming out

allow http in
but delete the outbound rule
delete all outbound traffic
will you get the traffic back?

why does that happen
security groups are stateful
if allow a port to come in then auto allowed to go outbound
if you allow a security group protocol in 
that is allowed out back out again

add all outbound traffic out
it will break things in the course including elastic load balancing

please do that it will break other lectures

what have we learned

inbound traffic is blocked by default
if you want traffic have to add a rule

changes to sec groups take effect immediately

any number of ec2 instances within a security group

security groups are stateful


