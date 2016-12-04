going to talk about amazon aurora
db available in rds

bespoke engine 
not something you can go and download and install on your server at home

not like mysql
can't store locally on you device

however it is relational as long as have sql type db

combines speed and availabiltiy

with cost effectiveness of open source dbs

big challenge to oracle get all the advantages of oracle

HA and performance

advanced db technology launched

feedback has been good

aurora won't be tested yet


no aurora questions yet

some understanding of what it does before the exam 

scaling capabilities

10gig increments of scaling

autoscaling

compute resource can scale up to 32vCPUs and 244Gb of memory


scale up aurora only takes about 10min

next thing is that it has 2 copies of data is contained in each az with min of 3 az 6 copies of data

handle loss of up to 2 copies without affecting write avail and 3 copies without affecting read

self healing storage data blocks of disk scan for error and fix them

replica features

2 types of replicas available

aurora replicas (currently 15 )
mysql read replicas( currently can have up to 5)

difference?
is the failover

failover auto occurs in aurora

because we turned off

takes 10 minutes to provision

aurora instance is available

mutli az and replication role 
writer

eu-west-1c

this is the instance endpoint
dns address for this partical endpoint

if this particular instance fails


go in and handle 
