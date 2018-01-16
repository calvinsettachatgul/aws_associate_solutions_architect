
iam lab 
------------------------------

iam is global!
    they are available all across the world 

iam lab
virtual mfa device or 
hardware mfa device

list of devices that are supported

android 
iphone 
windows
blackberry

use google authenticator

go back to the aws console

get the qr code
google authenticator
enter a code and wait till it expires
then enter another code

type in user name

types of access

programatic or
aws management console access
auto gen password?

users must create a new password

creating a group

finance sysadmin
superuser

attach a policy

administrate an aws environment

admin access and system administrator
    json format of policy

inside cloud trail 
describe a trail

see the document

compare to what document is to administrator access 
admin access
    same as root 
    full access

administrator is full access

allowed to anything in this account

for arg sake create it

next review
created group 
created users

applied to group

generated tokens to programatically execute commands in aws 
    access key id 
    secret access key

tokens to progrmatically interact with aws
install command line tools

have s3 buckets
copy files from laptop to s3
    using s3 and design storage solution

use access key id

use user name and password

see these details only once
important exam point
    only when programatically interact
    cant log into the console

john only has glacier access
apply iam policy

    password policy
roles
user in another account grant them a role

users from a corporate environment

create a role
    write files to s3
    select role type 

use ec2 and lambda

store objects in buckets
quick lab to set up billing alarms

download the csv files

create a new group 

    john works in hr 

    read s3 access
    remove john from this group
        add into the hr group

    
    change password 
    amazon s3 read only access 

    add permissions to john 
    not to the group 

    add permissions directly to john 
        not from a group attached directly to him 


    security credientials 
    make them inactive?
        no longer programatically able to interact with aws 

john is a member of hr group 


created iam users 

apply a policy
    apply password policy 

roles ec2 section of the course 

    entities that you trust 
    role in another account 
    write to an s3 bucket 

    ec2 isntance needs to perform actoions 


    create a role 
    allow ec2 to write to s3 

role type brocken down by services 
    click on ec2 

    amazon s3 admin access 

    full access to s3 for ec2 

    create that role 

    apply that role to an ec2 instance 
    
