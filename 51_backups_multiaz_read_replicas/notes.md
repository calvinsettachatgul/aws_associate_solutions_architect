backups multiaz
and read replicas

rds vs dynamodb

2 different backups

automated and snapshots

recover db
to any point in time in retention period
1 day to 35 days

default create rds db then 7 days selected 

throughout the day snapshot

recovery to within a second

recover to within a point of time

turn on automated backups

are enabled by default stored in s3

storage equal to the size of the s3

taken in a defined window

do this when db not used very heavily 3am every morming

when it does the auto db
storage io may be suspended and experience latency

snapshots are different
done manually have to go into console

stored even whether you delete the original rds instance


last thing automated and snapshots

if restore?
	restored version goes to a new rds instance with new endopoint


encriptyon only available for mysql oracle sql server, postgresql and mariadb

if you ahve a look logged into rds instance
created in last lecture
instance actions and do a few things
take a snapshot

acloudguru snapshot

take snapshot and will be creating

click on snapshot creation

point in time recovery for any of these 

restore then it will give it a new instance new db endpoint

leave everything as default settings

option to be multi az deployment?

leave everything as default setttings

restore to particular az zone

restoring full snapshot

if you want a point intime restoration
acloudguru
restore to point in time
give you exact time and date to do a restore

march 12 10am 5min past and 10 seconds
point in time restore to that point


see down here will create new db instnce

this is the march 12 restoration

full snapshot or point int time restoration

snapshot taken
migrate share
restore

migrate onto another db aurora

go back to snapshots can also copy the snapshot
move it to a differetn region

move it do asia pacific

can restore it

go back to it for a sec
restore it to differetn sinstace size class

manual snap shot to increase the size of the rds instance
scaling up for additional performance

change the intance class

go to r3 extra large

encryption can't restore as an encrypted copy
launch a new db instance

then say mysql multiaz
acloudguru3
username password

leave everything else the same configure advanced settings
enable encryption and click yes give you the master key
stored with the key management service

once it is running all data will be encrypted

what do you need to do ?

import to encrypted database

move onto multi az

elastic load balancer with 3 ec2 instances

advantage lose us-east-1 failover to us-east-2
won't need to change the connection string

that means you get multi az auto failover
don't need to do connection string updates

aws handles connections for you

in event of planned maintenance
failover or
AZ failover

want performance then read replica

backups and read replicals

sql server
oracle mysql
aurora 


read replical is asyc replication

multi az

this one you can use to boost performance

what can you actually do?

you can have read replica of read replicas

read replica databases 
used for scaling not for disaster recovery


must have autobackup turnedon

have read replicas of read replicas
more read replicas you have higher latency
each will have own dns endpoint


not 2 copies of the read replicas

2 copies of the read replicas
can create them from multi az

can be promoted to their own databases 
will break the replication

promote the read replica to its own database 

second region 

create a read replica

create the db
instance actions 
create read replicas

can change the size from the original db

leave as t2 micro
db instance identifier

separate az?

mysql database
based in tokyo?

slightly different options

differetn az in tokyo create read replica 
swtich regions 
creating it

initiating it modifying it

then you nhave read replica in tokyo region

difference between dynamo and rds

change the instance size and scaleup
it is a manual process though!

change the instance size

its not automatic requires manual interaction

different scenario questions

rds or dynamo

if you want auto scaling
without any down time
then pick dynamodb

you have to add a read replica with rds

bare in mind for the exam

explore it in another lecture

else move onto the next lecture!
