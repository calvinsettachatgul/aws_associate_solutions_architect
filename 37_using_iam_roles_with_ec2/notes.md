create ec2 instance that has been assigned a role and use that role to communicate with s3 storing the cred locally on the ec2 instance before

imagine compromised ec2 and get those credentials it is a security risk 
also it will be hard to manage

if you store cred 
have to go on to each ec2 and change

log into aws console

under iam you can see roles

role that was created when set up cross region repliation

hit create new role

select the service role for ec2

select on the policy amazon s3 new role

ec2 main console

launch instance

amazon linux ami t2 micro
s3 admin access go next

call this my ec2 role server

hit next
select dmz security group

lauch the ec2 with default key pair
look at instances

see the role
s3 admin access 


iam role can only be assigned when ec2 instance is  launced cant assign it later

can change permissions but not the same as changing the role itself

cant assign roles later

cant assign new roles but can change the access of the role

launch terminal window

ssh into ec2 instance

ssh ec2-user@<ip address> -i key.pem

login and clear the screen

aws s3 ls

and now you can see it has used the role to access s3

home directory to show all hidden files there is no .aws

no credentials in the environment
this is more secure
appliations on this server can call aws s3 cli

don't have to change manually the credentials


take aways

roles are considered more secure than storing on ec2 reason:
ec2 compromised can only use credentials on access key and secret access key

stop them? delete the access key and secret access keys


roles are much easier to m anage change the permissions of the roles later
roles easier

roles are only assigned during ec2 provision
can change policy or permission after but what you cant do is change roles

or assign new roles to exisitng ec2 instance

4th is something haven't covered in the lab
roles are universal
use in any region
south korea tokyo and sydney

provision role 
you can see the s3 in there
don't have to worry about creating role for per region basis


