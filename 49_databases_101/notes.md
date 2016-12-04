databases 101

5 diffrent database services availabe

rds
dynamo
elasticache
redshift
dms
	migration reinvent 2015

relational database
different tables and workbooks
	different rows and fields

different fields that make up the database

another thing to notice
each field contains the same type of data

gender field always contains a single character
male of female
important for db warehousing

RDS
sqlserver
oracle
mysql server
postgresql
aurora
mariadb

important to read differences between 

what is the relational database
excel spreadsheet
different tables workbooks

in workbooks different rows and different fields

each row is a record

row # 1 row about me

row #2 is about colleague

notice each field containts same type of data

gender field always contains single char
why is this important?

relational 
microsoft sql server
oracl
mysql server
postgresql
aurora
mariadb

6 different

rds and dynamo db come up a lot in the exam 

read the faq the differences between those 2 why you would use one over the other

nonrelational db
only roughly 2004

head around

couchdb
mongodb
cloudant

dynamodb
document object oriented

key value pairs
amazon its document 

database
collection => table
document => row
keyvalue piars => fields

document with different key value pairs

JSON/ NoSQL

have embedded data structures
street suburb
high level overview

database warehoursing

come out in lst 10 years
microsoft sql server

datawarehousing

large and complex datasets

OLTP vs OLAP

datawarehouse or RDS

online transaction processing
pull up a record set
name date address delivery status
transactional only happens once
hits the database lightly

online analytics processing 
trying to analyze large volume of information
manager figures out net product of a digital product
over a period of time
in stores in india and stores in pacific region

what is needed to calculate this
# sold in both
unit costs in each region
sales prices
different currencies

sales prices
minus the unit costs
hitting the database really hard with a lot of different queries

relationsal is difficult to scale out

running queries on database while doing the online transaction
really affects the io of the db

database warehousing
duplicate
this is where you run the analtycis
has a different architecture

to maximize performance
use columnar storage

database field is the order number
columnar storage
will cover in redshift

move on to elasticache

retrieve 

elasticache
	memecached
	redis

with elasticache will cache most consistenly queried in db

what the top 10 deals are for today
cache that in elasticache
will get it from elasticache and not from disk

improve performance of database


dms
reinvent 2015
still in preview
may be an exam topic sometime in 2016
pretty amazing
migrate onto aws automatically 
aws manages complexity

parallel transfer
ensures transactions while transfer takes place is migrated

legacy oracle db
expensive

now that you have dms
convert it to a free db

takes custom code 
customization
put it into a format that is compatible with mysql

is this the death of oracle?
move legacy db to mysql

covered basics of db


RDS is for OLTP
sql
mysql
postgresql
oracle
aurora
	reinvent 2014
mariadb
	reinvent 2015

dynamodb

redshift OLAP
	analtycis processing

elasticache in mem caching
	memecached
	redis

DMS
	migration
