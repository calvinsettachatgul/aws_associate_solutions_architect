databases summary
------------------------------

rds
     oltp 
sql 
mysql 
postgresql 
oracle 
aurora
mariadb 

dynamodb 

redshift 
olap

elasticache
memcached
redis
------------------------------

what is 
rds 
multiaz

read replicas 
ec2 instances behind load balancer 

us-east-1a
replicated to us-east-1b

create a read replica of database 

read from read replica and write to main database 
    can have read replicas of read replicas but there is lag 
    can have up to 5 read replicas 

create aurora replicas 
    loss up to 2 copies of data for write 
    loss up to 3 for read 

self healing 

2 diff types 
    aurora 15 
    mysql read replicas 5 of those 

dynamodb push button scaling 
rds not so easy 

scale up or out 
    using rds will have some down time 

dynamodb 
    all ssd storage 

    2 diff types of consistency 
    eventual
    strongly consistent in 1 sec 

redshift configuration 
    single node 
        160 gig 

    multinode 
        leader node 
        compute nodes 128 max

elasticache
2 caching engines
memcached
redis 

cache those products for online store 
in memory cache for the product 

read the faq 

highlevel what these services are 

database running really slowly

have any questions??
