have a bucket

versioning is turned on

what we are going to do is create a new bucket 
myacloudgurusydneybucket
    put it in sydney

leave everything in default and create 

in sydney

let it as default
exists within sydney
turn on cross region replication

go over to management
    replication
    havent created any cross region replication rules for this bucket 
    all contents? or prefix? 

sub folders of buckets 
    or entire bucket

destination 
    in this aws account or another aws account 

    enable versioning on this bucket error

    optionally change the storage class 
    standard IA 
    if using as backup device 
    make it standard IA 

select an IAM role
    create a new role for you 
    enable versioning on sydney bucket

do you think objects in current bucket have been replicated to sydney
they are not in there yet not the existing 
but only newly created 
go to google 
aws command line tools aws 
google it 

aws cli 
install this 

64 bit 
mac or linux using pip 

pip install awscli

if no pip installed then google and type in installer for it
using python there are standalone installers

go over to terminal and terminal window in mac

just awscli tools 
download install command line tools 

aws configure 
key id 
secret

create a new group 
admin access 
aws access 

policy type administrator access
hit next 
aws admin access 
create a user 
hello cloud gurus 
only programmatic access 

hit next 
create the user 
get the access key id 
and secret 

go over to terminal 
aws configure 

copy and paste access key 
secret access key
default region 
eu-west-2

hit enter 
hit enter default output format

should be able to type aws s3 ls 
 how to use in real life 

bitcoin 
ether 

buying ether from different providers 

wallet stored as encrypted file 
store in s3 and cross region replication 
encrypt 
lock down the buckets 
to stop people to access the wallet to access the coins 

aws s3 cp -recursive s3 

make the other file 
public 

does cross region replication copy over the permissions?

deletion of delete marker does not replicate



