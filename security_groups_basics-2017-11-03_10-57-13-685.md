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

