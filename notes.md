s3 is object based
files
s3 is universal namespace

bucket name looks like
s3-region.amazon.aws.com

consistency model for s3 is eventual consistency for override puts and deletes
read after write consistency
	immediately read after write

proppagation for override puts and deletes
	may get the older versions of the object
	wont propagate instantaneous



new object -> read immed
upldate, delte object -> eventual consistency may access older version or undeleted object

also going in 
s3 storage tiers

s3 durable, immed avail , freq access
s3 IA immed avail, infreq access, charged a fee to access

reduced redundancy
less durability not 11 9s durability
afford to lose this data not irreplaceable

glacier for archived 3-5 hour wait
very inexpensive

core fundamentals of s3 key value stores

s3 key name of the object value the data
meta data is data about data
access control lists

s3 is object based storage only flat files
no OS or to run a database

don't use s3 for that
Elastic block storage for that

also versioning
all versions of an object

pay for each version of the object

if you update something 10 times then you pay for all those versions

backup tool placing a delete marker not actually deleting
versioning cannot be removed only suspended

only delete the bucket itslef

there is lifecycle rules

there is multifactor authentication
google authenticate
or hardware token

cross region replication
source and destination versioning req

lifecycle can be applied with or without versioning


30 days after creation date then transition to S3 IA

archive to glacier
if using IA then 30 days after moved to IA

remember from the lab 60 days from creation date

if not using IA then can move to glacier right away

delete using lifecycle rules

CDN
edge locations separate from AZ and regions

difference between origin and distribution

s3 bucket ec2 elastic load balancer of route 53

distributions

multiple origins

web distributions
rtmp distributions

edge locations don't have to be read only

can write to an edge location

cached for the life of ttl

cached for 24 hours by default can change the default value

clear cached objects from the edge locations




push out new content to users

moving on to securing buckets

by default access is private

make things public
bucket policies bucket level
access controllers to object level

object is viewable by everyone

access logs
	logs everything that happens to the s3 bucket

log the log to another bucket or other aws accounts

look at that later

encryption
	in transit
	resting

https to use connecting to s3

4 types of encryption at rest
	serverside
		s3 managed keys

			multifactor
			encryption of key with master key
		aws managed


	aws key management service

		serverside kms
		some benefits and costs
		separate permissions for envelope key
		additional protection against unauthorized access
		there is an audit trail

	
	serverside encryption with customer key
		client managed keys
	
	client side encryption
		encrypt yourself on the client side
		then uploading to s3

aws storage gateway storage volumes
	3 different types

import/export disk
import s3 ebs glacier
export s3 only

import/export snowball
only s3
north america and new

moving everyone to import/export snowball


moving on to ec2
backbone of aws
