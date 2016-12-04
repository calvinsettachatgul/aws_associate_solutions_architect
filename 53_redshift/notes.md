redshift data warehouse

different architecture for analytics
columnar system

aurora instance?

fast powerful petabyte
start small with .25/hour

1/10th the cost of other data warehousing


looking across a record set

transaction successful?

adding up columns and adding up  a lot of them
really important to measure
looking at columns

data warehousing
explain what htat means in the next slides

redshift config
start out with single node
160 gig of data on that node

multinode to scale leader nodes
and compute nodes

up to 128 compute nodes

store queries and then compute then multi nodes

if you are a small business

if talking about columns

columnar data storage
redshift organizes by columns

queries involve aggregates

only columns are accessed

fewer io is requried

wont to to data in adjacent columns sequential by  columns

the other cool thing is advanced compression

columnar data stores can be compressed

do the compression based on columns you can compress that data much better
multiple compresssion techniques

doesn't define indexes or 

most appropriate compression scheme

choose the best for it!!

redshift can be really really fast


massive parallel processing

amazon redshift easy to add nodes
maintain fast performance as data center grows


advantage of massive parallel processing

compute node hours
1 unit per node per hour

so a 3-node data warehouse cluster running persistently for entire month would incur

***redshift security***
encryptyed in transit
at rest using AES-256 encryption

key management
manage by HSM also

not designed to be multi AZ

only 1 AZ availibility

can restore snapshots to new AZ s

it is a database warehouse system
really fast and really cheap

one of best selling when launched

acheived speed with columnar storage
storing data sequenctially 
accessing large columns of data


it is extremely efficient
db layer and software layer

