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
attached but not created a file system on the volume and mount to a specific directory 

make the filesystem 
    from this volume 
mkfs -t ext4 /dev/xvdb

now mount to a specific point 
make a directory called /acloudguru 
mount the volume to the /acloudguru directory 

see if there is data on it 
file -s /dev/xvdf
says more than just data that means tehre is data on it 
mount /dev/xvdf /acloudguru

have a mysql server 

lsblk 
see that you have a mounted filesystem 
have the lost and found directory 
create a test.html file 
write test test test 

running off of a seperate volume 
upgrade the storage type to provisioned iops 
stop the mysql service then unmount the service
take a snap shot then restore the new volume 

change the storage medium 
still see the same file structure  
good to know as sysops admin
have any questions 

clear the screen and unmount the volume from the ec2 instance 

umount /dev/xvdb

unmounted the volume 

cd /acloudguru
ls 

data is still there after you mount 

mount /dev/xvdb

cd /acloudguru

umount /dev/xvdb
it is now unmounted 
there is nothing there 

detach from the ec2 instance 
find the volume 
actions 
    detach volume 

if its mounted you can do force unmount 

data corruption if forced sometimes 
while writing 

create a snap shot and could attach to other ec2 instances 

could see the test html page 

how can you upgrade the storage medium

create a snapshot 

testhtmlvol 

look at your snapshots 
takes a couple a min 

then look at the snapshot 

create a new volume off the back of the snapshot 
change the type from magentic to provisioned iop 
hit create 
successfully created a new volume 

attach to ec2 instance 

called it mytestsqldb 
hit attach
go back to ssh window 

lsblk 
new partition 
not called xvdb

file -s /dev/svdf 
    large files huge files message 
    more than just data 
    has data already on it!

mount /dev/xvdf /acloudguru

ls 

see the test.html file 
then you see the data there 

stop the mysql service 
unmount the volume 
take a snapshot 
restore a new volume from the snapshot 
remount to ec2 instance now on provisioned iops 

