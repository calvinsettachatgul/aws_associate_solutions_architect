go into your fav text editor
create health check text
i am healthy

healthcheck.html

now go over to aws console

and go over to s3 access the bucket that he created for the bootstrap script

currently index.html
upload healthcheck.html

start upload

index page and healthcheck

go over to ec2

have  an elastic load balancer

need to recreated it if don't have it

runs a health check to a file

within 20 seconds will see if healthcheck offline

within 30 seconds iwll see if healthy

create an auto scaling group 
    create a launch config first 

go to launch configurations

create autoscaling group

create a launch configuration

click launch configurations

select ami

amazon linux ami

if you have a custom ami provisioned  from snapshots

will be using it later in the course

t2 micro what will call launch config group?

my auto scaling group

not spot

will use s3 admin role

kernel id
ram disk id

use bootstrap scritp use the previous one

#!/bin/bash
    use the same bootstrap script 
        as before 

make sure apache service stays on

enter the name of the bucket
    aws s3 ls 

copy the entire content of the bucket 
    start the apache service 

add storage 

webdmz security group 

creat launch configuration group

create autoscaling group page 

my autoscaling group 

start with 2 
deault vpc 
see different az

redundant platform 
    choose all az 
    put instances across all az 
        spread evently across all of them 

aws s3 mv s3://calvins/fishingboats.jpeg s3://calvins/media/fishingboats.jpeg
aws s3 mv s3://calvins/highway.jpeg s3://calvins/media/highway.jpeg

application load balancer at layer 7

classic load balancer at layer 4

copy the dns name of the elb

MyClassicELB-1319049883.us-east-1.elb.amazonaws.com

