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

go to launch configurations

create autoscaling group

create a launch configuration

click launch configurations

select ami

amazon linux ami

if you have a custom ami rpovisioned from snapshots

will be using it later in the course

t2 micro what will call launch config group?

my auto scaling group

not spot

will use s3 admin role

kernel id
ram disk id

use bootstrap scritp use the previous one

#!/bin/bash


make sure apache service stays on

enter the name of the bucket

aws s3 mv s3://calvins/fishingboats.jpeg s3://calvins/media/fishingboats.jpeg
aws s3 mv s3://calvins/highway.jpeg s3://calvins/media/highway.jpeg

