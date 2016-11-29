terminate the existing ec2 instance

now launch a new instance amazon linux ami
t2 micro

iam s3 access

leave iam as none then everything else as standard

8gig of storage

tag as ec2 noroles

hit next
use existing security groupls
webdmz

left ssh open to the world

go ahead and hit launch use existing ec2 key pair
go back to the console go to iam 
create a new user
with specific set of permissions

joe blogs

hit create

user is being created


download to downloads directory

created an access key id and secret access key 

hit close and go to groups

create group
	s3 group

everyone has full accesss to s3

that is the policy

add joeblogs to this group


joeblogs has been added to my s3 group now go back to ec2 ec2 is ready

1 running instance

now the web server is up

iam role is blank
ec2 has no iam role assigned to it don't have the option to add a role

this is an important topic only assign iam role when you create the instance

cant assign later
connect with the public ip in the terminal window
use the command ssh ecw-user@<public_ip> -i myec2.pem

now connected to ec2 instance

apply updates

elevate priviledges 
sudo su

use the command line

see s3 buckets as a list

invoking aws

aws s3 ls

will list s3 buckets

have not loaded credentials in to aws command line

amazon linux ami

aws cli already installed

if you've used another image then may not have aws cli
aws configure

give access key id

now the secret access key

copy out the access key id

now asking for default region name

aws regions and endpoints
google it
it will give you the different regions you can enter
dont confuse with AZ

aws s3 ls

just list whats in the s3 environment

3 s3 buckets

these buckets are global

backup bucket was in a different region
listed everything in s3 need help?

aws s3 help
gives helpful discription

when you are done hit ctrl-c

where are the credentials stored?

cd ~

ls
there is nothing there

hidden directory

cd .aws

see the config and credential files

vim credentials
see tha access key id and secret access key

for this reason can be inherrently unsafe

this is where roles come in

don't store credentials on ec2 instance

ec2 instance can assume a role!

terminate the instance

and delete to joe blogs user

aws console and terminate the instance

hit yes terminate

terminal window is uhnappy
clear out the user accounts that not currently using


go ahead and hit delete

learn how to user roles in the next lab


