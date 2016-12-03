elastic file ssystem

still in preview not yet in the exam
understand it how it works

efs 
elastic file system
storage for ec2

easy to use
create and configure filesystem

growing and shrinking have the storage they need when they need it

preprovision ebs volumes

attach to ec2 instance
mount to a particular directory etc

can't mount ebs  to 2 ec2 instance at once

still in preview
enabled access only available in oregon

supports Network file system 4 nfsv4
only pay for storage that youuse
no preprovision
scale to petabytes

support concurrent NFS

data is stored across multi AZ's within a region

not 11 9s of durability


not rated

blocked based storage rather

efs rather than s3

block based rather than object baed

share them with other efs

read after write consistency

block based rather than object based

may not be able to do this yourself

sign up for the preview?

made available in a couple of days

in ireland

click on elastic file system

only oregon

create filessytem

have to sign up to preview

here is splash screen
create a mount target

use a vpc
create a mount target

which az have a mount target in?

choose our subnets


these are the default subnets for each az

determine our IP?

or else auto alocate

security groups

same security groups default for vpc

myfilesystem
next
review information

put in this vpc and 3 az
auto ip and to this security group

create filesystem

provision 3 ec2 instances

in different az

go to ec2 
2 ec2 instances

linux ami
t2 micro
use standard
except choose az
us-west-2a

storage

us-west-2a

security groups
spun up earlier
web dmz
review and launch using private key

view instnace and launch second instnace

subnet will be 2 b

hit next next

us-west-2b hit next

use preexisting security group
review and launch use keypair

provision load balancer
create load balancer
my production lb

create within default vpc

let it have port 80 
same security group

next next

standard health check

healthy threshold to 3

let it have port80 in the same security group

standard health check 


in both ec2 instnaces

it will fail the health check unless install healthcheck.html file

come back should be able to see efs
it is available in all 3 availibilty zones

note the public ip addresses of IP addresses and note them

a lot of terminated instances

need to make sure they are in same security group as network mount

in default vpc security group

us-west-2a and us-west-2b

cehck on efs

now go back to ec2

run 2 diferent terminal windows

blue and green

pause the window

2 differetn terminal windows

2a and 2b west

connected both 
raise priviledges to root and clear

on both instances install apache

yum install httpd -y


start the apache service

service httpd start

started on both 

created the /var/www/html

there is nothing in there
go back to the root

clear and go to root directory

next thing we need to do 
go  to efs 

click in here 
filesystem access ec2 mount instructions

linux ami already preinstalled 

all have to do is run the command to run instances

not to efs directory but to var/www/html

want to go to var/www/html
and hit enter

really cool

go to 
/var/www/html

vim index.html

Hello Cloud Gurus! This is my new homepage

all has worked?

same file
one copy of our code but we have 2 webservers serving up this content

now go to elastic load balancer this will be in service

go to instances its finding index.html

go to dns name of load balancer will load the file we just created 

hello cloud gurus this is my new homepage

essentiall all code is in one filesystem

but mounted across many different ec2 systems

change bash script to efs mount point

1000s of different mount points

such a new product not on the exam

nsf4 
windows 2008

2012 do not support

central repo to serve code



