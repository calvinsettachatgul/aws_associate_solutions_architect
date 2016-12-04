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

what is aurora?


5 times better perforamnce than mysql
similar perf and availability

all advantages of aurora

oracle but less cost

advanced database technology

won't be on exam

no aurora questions yet

have some understanding before sitting in at the exam

scaling capabilities

storage auto scales

go over 10gb then get another 10gig storage

push button scaling?
not like dynamodb

next great thing?

effectively 6 copies of your data
handle 2 copies loss without affecting write
handle 3 copies loss without affecting read
self healing db

replica features

provisiion all these

aurora replicas
have up to 15 aurora replicas
upt to 5 mysql read replicas

failover?
lose primary arurora
then auto occur to aurora failover

will not auto failover to mysql

lab not covered in free tier at all budget 5 -10 dollars

don't leave it running by accident

***aurora lab***

create aurora replica
we have our source
use the same db isntance class
the source databse acloud guru replica

publicly accessible?
different az?
	no

different tier
tier 1 failover
	additional failover replicats


going to leave everything as is

aurora replica

this is a reader not a writer

	if you want additional traffic then you want a writer role

dns endpoint name
	connect to the database

now you can see that multi az is gone

add another aurora read replica

then you can 3 zones
as many az as is availabie for your region

wait for replica to be created

aurora read replica available

replication role is a reader

compare these 2 different
instancs

cluster endpoint
	this particular instance fails
then auto failover to another instance endpoint

amazon will handle the failure updating

its probably not going to come up in the exam 
couple of more things
instance actions and do a failover

restore in a point in time

create another replica

start deleting the intsances
read replic delete first

it does cost money
hit delete

if want to create final snapshot?

	ask us on the primary replica

read replica needs to delete first before deleting the cluster

that has now deleted
now go in and  delete the cluster
now straight away do you want to create final snap shot everything is getting deleted snap shot and that is it

get familiar they will add some aurora questions along with ecs
