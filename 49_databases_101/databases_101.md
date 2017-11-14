databases 101
------------------------------

skip if seasoned?

log into console 
databases 

5 diff services 
rds 
dynamodb
elasticache
redshift 
managed db migration 

what is relational db 
since the 70s

inside workbooks and fields 
id column 
first name 
last name 
gender 

rows are records 
each field contains the same type of data 

microsoft 
oracle 
mysql 
aorora
mariadb

rds and dynamo come up on the exam important to go over the faq 
differences one over the other 
nonrelational 

2004 
get your head around 
couchdb 
mongodb 
cloudant 

dynamodb 

document orriented

what do i mean 
got a collection a collection and key value pairs 

db and a collection collection is a table 

document 
this is a row 

then you have key value pair a column item 

{} curly bracket 

embeded key value pairs 

nosql db 

database warehousing 
microsoft sql server 

business intelligence 

oracle hyperion 
pull in complex large datasets 

used by management 
    to do analytics 


2 different types of transactions 
transactional process
analytics process 

oltp 
vs 
olap 

transational hits lightly its going to happen once 

analysis 
large data analysis

digital radio product 
    profit over set amount of time 
        2 diff locations 
        india 
        pacfic region 

unit cost 
sales price each radio 

different currencies 
    sales prices different 
    sales price - the unit cost 

hitting the db really hard with queries 
    will have a lot of impact 

relational difficult to scale out 

running on production db ? 

while other clients making requests 

db warehouse is a copy of transaction run the olap 

completely diff architecture 
    maximuze the query performance 
    columnar storage 

db type is always the same 
    name characters 
    order number number 

using columnar storage increase the performance 

elasticache 
    webservice to deploy operate and cache 
    scale by rely on in memory cache 

2 open source 
    memcached
    redis 
improve db performance speed 

cache most consistently queried 
    top 10 deals of the day 
takes a load of db 
    improve performance of underlying db 


dms 
    2015
    new topic might be an exam topic in 2016

    migration db onto aws easily 
    compression 
    file transfer 
    datachanges are replicated to the target 

schema conversion tool 
    convert ssource db to a different target db 

oracle is expensive 
legacy applications use oracle 

take oracle and convert it to aurora 
    custom code 
    storage and procedure 
    put it in a format that is compatible with mysql 

death note for oracle? 
    move to free open source db such as mysql 

rds is for oltp 
    sql 
    mysql 
    postgresql 
    oracle 
    aurora 
    mariadb

dynamodb 
redshift 

elasticache 

memecached 
redis 

dms 

