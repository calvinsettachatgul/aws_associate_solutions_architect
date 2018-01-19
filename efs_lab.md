efs lab 

need to understand efs 
elastic file system 
amazon elastic compute cloud 
storage capacity is elastic 

applications have the storage they need when they need it 

no preprovisioning 

provision the ebs volume 
then mount to a particular instance 

mount volume to 2 ec2 instance at once 
support the nfsv4 protocol 
only pay for the storage that you use 

elastic file system
theoretical view 
file storage for ec2 

   nfsv4  
only pay for storage that you use 
just put files on it and 30cents per gig 
up to petabyte scale 
1000s of concurrent requests at once 
its quite new 
    not 11 9s durability 
    will get a durability rating eventually

efs is block based storage 
    files and share them with other ec2 instances 

similar to s3 
    read after write consistency 
    block based not object based 

just start putting files on it 

not available in eu london 

get a durability rating 
in the future 
this is a new service 
not like s3 where you get a durability rating 

efs is 
this is block based storage 

similar to s3 read after write consistency 

create  a file system 
select vpc default for this region 

create mount targets 
choose the az to have a mount target 

can predetermine the ip address 
if leave it blank then aws provisions for us 

in this vpc in these az 
with address and security group 

provision 3 ec2 instances 

in different az

consistent with the az mountpoints for the efs 

east1a
east1b
east1c
east1d
east1e
east1f

public dns of ec2 instances 

ec2-52-23-203-30.compute-1.amazonaws.com
ec2-54-205-63-35.compute-1.amazonaws.com
ec2-54-208-206-85.compute-1.amazonaws.com

this is the mount command 

sudo mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2 fs-ca1e4083.efs.us-east-1.amazonaws.com:/ efs

this command mounts to a directory called efs 
we want to mount the efs to 
/var/www/html

sudo mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2 fs-ca1e4083.efs.us-east-1.amazonaws.com:/ /var/www/html

efs is in the exams 
what are you using it for? 
using it for a file store to serve content 

mutliple ec2 accessing the same files 
user level permissions 
directory level permission 
universal across all ec2 instances 

only certain users can access 

restrict at a file level and directory level 

different scenarios around ec2 
and choose ebs or efs 

use cases of efs 

accessing the same files
make directory permissions and restrictions 
    at file level and directory level 

ebs to a single instance 
efs to multiple instance
