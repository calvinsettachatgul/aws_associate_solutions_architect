aws command line (cli) lab 
------------------------------

create an ec2 cli user 

s3_admin_access 

leave access as default 

add the user to admin access policy 

secret access key 
and secret access id 

given complete access to aws account 

click in and copy public ip address go to terminal window and ssh into ec2 instance 

ssh ec2-user@<ip address> -i key_file

elevate priviledege to root 

use the command line 

aws configure 

go to csv file 

access key id 

secret access key 

copy and paste into clipboard 

default region 

region list 

regions and endpoints 

london 
ec2 london 

use regions 
copy and paste specifically 

dont confuse with az 

hit enter for default output format 


aws <service_name> --help

where are the credentials being stored?

cd .aws

ls 

see config and credentials 

see the information 
stored locally on ec2 instance 

port 22 open on the instance

get the credentials by going to the home directory 

with the credentials can install the command line 
provision ec2 instance 

bit coin mining 

developer mistake storing the credentials on github 

credentials are not secure 

want to be able to make commands 

use roles 

next lab get into this 

clear the screen 

make the instance self destruct 

aws ec2 describe_instances

find web server 

under state find that it is running 
public ip address 
see the instance id 

aws ec2 terminate-instances --instances-ids <instance_id>

self destructed 

go back to the console 

go over to ec2 and terminated that instance 

dont use users for command line 

go ahead and delete users 

following user will be permantently deleted 

aws account is secure 

upload to github?

resolve the issue to delete the instance 
regenerate the secret access key and id 
away fromaccess keys and use roles 
