security groups lab 
cloud guru website 
------------------------------
virtual fire wall controlling traffic to the ec2 instance 

add rules to each security groups 
first line of defense against to hackers 

ssh into ec2 instance 

services ec2 
install apache then 
hello cloud gurus 
website 

sudo su 
chkconfig httpd on
turn on the apache server all the time 

any rule applied takes effect immediately 
how quickly its going to take take
rules against security groups takes effect immediately

now it paused and refreshed 
go back to management console 

rules 

traffic going to come out?
resolve outbound?

another really important point 
security rules are stateful 

rule will automatically allowed outbound 
does not matter that dont have a matching outbound 
    stateful means inbound is kept state for outbound 

for vpc it is not stateful 
need matching 

pay attention to editing inbound rules cant deny traffic or pop 3 traffic 
blocked by default 
    not over a specific port or ip address 

can do it with netwrok access control lists 

default security group 
associate multiple security groups to multiple ec2 


allows RDP  3389
mysql and aurora 3306

allow them in for all traffic 

default security group is allowing 
    rdp and mysql 

add in an additional security group

change security groups 
add the default 

multiple security groups asssigned to ec2 instance 

cant deny port 80 and allow it in another 

took a couple of goes to show up in the video


all inbound traffic blocked by default 
have to allow https http
rdp 
mysql 
changes to security groups take place immediately 
any number of ec2 instances within security groups 


cant have deny rules 
only allow rules 
add up all the allow rules 

security groups are stateful 
if allow inbound then automatically allowed outbound 

interview questions 
explain diff between security group and network access control list 

cant block specific ip address from security groups 
only network access control lists 

best way to secure environment 
always use acl for ip address 

only allow rules 
not deny rules 

cant deny https 
by default nothing is allowed 
that is it for this lecture 
