this is going to be a lab

what is a volume? it exists on an EBS

root volume is created by default
then you can attach other volumes 

snapshot exists on s3 can take a snap shot of a volume it will exist on s3 point in time copy of a volume

incremental!
	only blocks that have changed are moved to s3

	take a snap shot of that volume
	only blocks changed are moved to s3 

	first snap shot then it will take some time to create
name volume
systempartitionec2

created 
state
level of monitoring
encrypted?

10gig size
magnetic cheaper

storing flat files
do not require high disk io

volume is not being created

log in to 

volume type is standard and know it is magnetic
rather than gen purpose

the volume has to be in the same AZ as the instance?
when I was trying to attach the volume I received message that there are no available running ec2 instances in the availability zone


attach the volume to the ec2 instance
display all the instances available

where is the volume going to sit?

warning message
Note: Newer Linux kernels may rename your devices to /dev/xvdf through /dev/xvdp internally, even when the device name entered here (and shown in the details) is /dev/sdf through /dev/sdp.

that is going to be the case with the aws ami

lsblk

xvda
	xvda1
xvdf
	no mount point

check whether the volume has data?

file -s /dev/xvdf
when it comes up with data then it is empty its raw storage

don't forget su permissions

sudo su

check whether the volume has any data on it?

mkfs -t ext4 /dev/xvdf
make file system 
mount a file system
format the volume into a filesystem

-t switch
	type switch
	type is most common for linux extension4

mount path location

create a directory called fileserver
mount volume to fileserver

mkdir /fileserver

mount /dev/xvdf /fileserver

mount <source> <destination>

see the lost+found directory
remove it

make some files
helloworld.txt
index.html

unmount the volume

umount /dev/xvdf

cd /fileserver;
ls; # there is nothing there!

switch back to the console
now detach the volume

create a snapshot of the volume
called MyFileServer

description 
A Snap Shot of My File Server

delete the volume

we will be able to take the snap shot and create a new volume for it

go back into volumes and delete the volume

go back to snapshots

after deleting the volume is deleting then 
snapshot status turns to pending as its being deleted


snapshot
	snapshot create volume

interesting -> you can change the type

test and dev environment
build out on magnetic rather than ssd -> less money

go live -> take a snapshot and go with a different storage medium

faster to create volume from a snapshot!

I am in us-east-1d

incredibly quick to create from a snapshot

then lsblk on ec2 shell

then 
file -s /dev/xvdf 
to examine the volume

see that there is infact data
we don't get the :data message

then have to attach to the same mount
/fileserver

you don't want to delete all that data

cd /fileserver

ls # see that /fileserver is empty

mount /dev/xvdf /fileserver

mount <source_path> <destination_path>

cd /fileserver; ls 
then you see the 2 files we created in the original volume 
helloworld.txt 
index.html


snapshots live on s3

volumes live on ebs

snapshots are incremental

snapshots are point in time 

snapshots are encrypted automatically

likewise restoring volume 
restoration is encrypted

taking a snapshot of a root volume of an ec2 instance
have to stop the ec2 instance first!

cover in more detail later in raid section of course


