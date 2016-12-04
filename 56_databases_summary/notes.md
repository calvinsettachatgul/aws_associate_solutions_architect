***this is rds summary***

6 different database engines in rds

sql 
mysql
postgresql
oracle
aurora
mariadb

dnynamo

redshift olap

elasticache 
memecached
redis

multi AZ

ec2 instance behind elastic load balancer

if failover don't need to update the dns

simulate a failover by rebooting

interms of read replicas

frequent reads instead of writes then architect the application

have up to 5 read replicas at this time

aurora
2 min copies

with min of 3 az 

so 6 copies of the data

if you want more then aurora replicas

2 copies of data lost without affecting write
3 copies of data lost without affecting read 

2 different types of replicas
aurora 15 diff
mysql 5 different

dynamodb offers push button scaling
rds is not so easy use a bigger instance size or add a read replica


need to have a maintenance window

dynamodb ssd storage
3 geographic distinct data centers
evental consistent reads (default)
strongly consistent reads

do you need the information (new) in under 3 seconds then strongly consistent

redshift data warehoursing

single nodes ( 160 gb)
multi node config

	leader node
		manages client

	compute nodes (128 nodes max)

elasticache
	deploy cache in cloud

	memecached
	redis

2 open source in memory caching engines

magento store front

allows you to cache those products

not lifted off a disk in an in memory cache in the cloud

go away and read the faq about rds

also know at a highlevel what elasticache is

what redshift is

choose beteween these systems

running really slowly what can you do to speed it up?

highlevel understanding about the servers


move onto the next section

