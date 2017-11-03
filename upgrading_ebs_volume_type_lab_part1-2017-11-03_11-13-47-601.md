upgrading_ebs_volume_type_lab_part1

how to upgrade ebs storage types from one storage medium to another 

upgrade ebs volume types 
database server on ec2 running mysql database on additional partition 
gen purpose ssd or magetic storage 

change to provisioned iops 
go into ec2 


previously 
add a new volume 

start with magnetic 
delete on termination not ticked 
leave as is 
tag the instance 

mysqldb
create a new security group just in a standard 
mywebdmz
tag the instance 
    mysqldb 

not secure dont use for production 

create a new keypair or use existing 

there are a couple volumes generated for this ec2 

go ahead and launch 

ssh into the ec2 instance 
wait for these to be initialized 

see what volumes have been added to this instance 
    attached to mysqldb instance 
    its attached to the instance but have not mounted it 

lsblk 

detach a volume 
it still has the data 
create a snap shot 

create a new volume from a snapshot 
provisioned iop

linux command to list volumes 
lsblk

called 
xvdf

see if there is data on it 
file -s /dev/xvdf
says more than just data that means tehre is data on it 
mount /dev/xvdf /acloudguru

have a mysql server 

running off of a seperate volume 
upgrade the storage type to provisioned iops 
stop the mysql service then unmount the service
take a snap shot then restore the new volume 

change the storage medium 
still see the same file structure  
good to know as sysops admin
have any questions 
