security groups basics 

secruity group is a virtual firewall

1 instance can have multiple security groups 
first line of defense 

lock down ssh to ip address


ssh and security up dates 
hello cloud gurus 

play with security groups 
wait for ec2 instance to provision 

copy and paste public ip address 

ssh -i <public pem file> ec2-user@<public ip address>

elevate priviledges of current user 
sudo su 

apply all updates 
sudo yum update 

updating all security patches 

install apache web server  
yum install httpd -y

start the apache server 
service httpd start 

start automatically when booting ec2 

chkconfig httpd on 

cd /var/www/html

<html>
    <h1>
        Hello Cloud Gurus!
    </h1>
</html>

create an index.html file 

go to security groups click on the webdmz security group 

description 

inbound rules 

outbound rules 

no tags 

deleting the inbound rules 

*deleting is effective immediately ***

inbound rule does not need an outbound rule 

anything added in will be allowed out 

access control lists need inbound and outbound 
    specifications 

security groups are stateful 
    adding inbound rule then adds an outbound rule 

nacl are stateless
 
you can't deny traffic 
you can only allow 

associate multiple security groups with an ec2 instance 

rdp 
mysql and aurora

allow them in for all traffic 

go back to instances 

add new security group 

remove webdmz 
add default 

you can change security groups 

cant deny anything in a security groups 
    there will not be any conflicts 

just adds up all the rules 

add more rules 
    allows rdp 
        remote desktop protocol
        3389
    add mysql aurora
        3306

webdmz

go back to instances 

change security groups 
    add default security group 
    can have multiple sg to an ec2 instance 


allowing 3306 3389

cant deny anything in sg 
    only allow 

wont have any conflicts 
    only adds up all the different rules

just try adding and removing if doesnt look right 

cover what learned so far 

all inbound traffic is blocked 
all outbound traffic is allowed 
    changes take effect immediately 

learned any number of ec2 instances within an sg 
    multiple sg groups attached 

only allow rules no deny rules then no conflicts 

sg are stateful 
    inbound is allowed out automatically 
nacl are stateless 
    need inbound and outbound rule specified 

cannont block specific ip addresses need to use nacl 

use network access control lists 
specify allow rules but not deny rules

by default nothing is allowed 
what is it have any questions let me know 
