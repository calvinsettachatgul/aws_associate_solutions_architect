volume ebs vs root store

machine image types root device volumes
ebs backed or instance store backed

the root volume

ebs backed volumes

spin up a normal ec2 instance 

root device type?

most of them are ebs
lauch amazon linux ami
standard settings

next and call it ebs

use standard security group
web dmz

now launching

go to community ami

go for an m3 medium

with storage 

all amis are either backed by amazon ebs or backed by instance store

for ebs volumes root device for an instance launched from the ami is an amazon ebs volume created from an amazon ebs snapshot


for instance store volumes the root device for an instance launched from the ami is an instance store created from a template stored in amazon s3

may take more time to provision an instance store volume

very fast provision time then use instance backed by ebs

instance store ephemeral
cant be stopped 
will lose data if stopped

reboot both 

by default root volumes will be deleted on termination however ebs volumes you can tell aws to keep the root volume device

k
