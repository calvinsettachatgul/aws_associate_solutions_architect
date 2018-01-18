
storage summary
------------------------------
exam tips 

s3 is object store 
    upload files
0 - 5tb
there is unlimited storage 
files stored in buckets 
    buckets are folders 
s3 universal namespace
    globally unique
https//s3-eu-west-1.amazonaws.com/acloudguru

consistency model for s3 
    read after write consistency 
        for puts of new objects 
    eventual consistency for overwrite puts and deletes
        can take some time to propagate 

update and read may get the older version of the object
    eventual consistency

s3 storage classes tiers 
s3 durable immed avail freq access 
s3 ia durable immed avail infreq access 
s3 red red sgorage reproducible such as thumbnail 

lower cost than s3 

glacier 
cheapest 
archive data 
3 - 5 hour wait to access 
remember core fundamentals 

key(name)
value(data)
verison id 
metatdata
access control lists 

object based storage only (for files)

not suitable for OS or database 

if want that you need EBS 
    elastic block storage 

allows you to store versioning 

pay for each version of the object 
update 1G object and update it 10 times then pay for 10 gig of storage 

great back up tool 
    only adding a delete marker 

once enabled versioning cannot be removed 
    can only be suspended 

versioning MFA delete capability
    multifactor authentication 

cross region replication requires versioning on source and destination bucket 

lifecycle management 
can be use din conjuction with versioning 
current version and previous version 
    transition to IA  30 days 
    archive to glacier 30 days after moving to IA 60 days after creation 
        
    permanently delete  

cloud front 
    what is edge location 
    content will be cached 
    origin and distribution 

    origin is origin of files 
        s3 bucket ec2 elastic load balancer 

    distribution 
        network   consists of collection of edge locations 

    2 types 
        web distribution 
        rtmp distribution 

can be read or write 

object cached for life of TTL 
    time to live in seconds 
    default cached for 24 hours 
        can change the default value 
        set up the distrib 

clear cached objects but will be charged 

    dont want to wait for 24 hours for TTL to expire can clear cached objects 

default buckets are private and objects private 

    way to make things public 
    2 methods 
        bucket policies 
        acl go to object level 

access logs
    of s3 
    log to bucket or log to another bucket 
    or buckets on a nother account 

2 types of encryption 
    in transit ssl/tls https

    at rest 4 types 
        server 
            s3 managed keys unique key with strong mfa encryption 
                master key that rotates sse-s3
            aws key management service sse-kms 
                envelope key to protect encryption key 
            server side encryption with customer provided key sse-c
        client side 
            encrypt the data yourself on the client side              

storage gateway 
    4 diff types 
        file gateway directly on s3 
        volume gateway 
            stored volumes entire dataset stored on site and is asych backed up to s3 
                iscssi 
            cached volumes stored on s3 only most frequent on site 
        gateway virtual tape library (vtl)
            used to netbackup backup exec veeam

moving on to snowball 
    snowball fight?
    what do you need to know?
    
standard 
    50TB starting size 
snowball edge 
    storage plus compute mini datacenter 
    very heavy
snowmobile 
    100PB 
    come with armored protection?

snowmobile 

high level 
    what is snowball 
    what is import export 

    import to s3 
    export to s3 

s3 transfer acceleration 
    uploading files to edge location 

    static websites 
    use s3 to host 
    cheap scales auto 
    static only cannot have dynamic website 
html and static content 

s3 write http 200 code 
load files much faster by enable multipart upload 
make sure the s3 faq before taking the exam
