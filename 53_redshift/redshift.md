redshift 
------------------------------

fast powerful fully managed datawarehouse 
analytics processing 
digital radio product that is being sold 
figure out the net profit 
figure out the number of radios 
    in each zone 
unit cost 
currencies 
sales price - unit cost what is it doing going across and looking at records set 

petabyte scale 
    .25 cents per hour 

    1000 per terabyte per year 

first lectures 
digital radio product 

calculate the net profit 

adding up columns 
    bringing all the data together 

looking at a column 
    transaction successful?

adding up columns concept 
this is looking at a common column 
not all the fields of a record 
with redshift 

single node 
160 Gb of data 

multinode 
leader node 
    receives queries 
    manages the client connection 
compute node 
    up to 128 compute nodes

can be a huge multinational
multi node 
manages client connection 
then communicates to compute nodes 
columnar data storage 
organizing data by columns 

columnar is good for analytics 
only columns are processed and stored sequentially 
column queries 

does not use data 

what is columnar data storage?
aggregates of a property on different records 
far fewer io 

increasing performance 
only going to use the data within those columns
advanced compression 

    row in a table 
    with different column data types 
    compression of rows with a lot of data types 

column with single data type 
compress that data  a lot better 

relative to traditional data stores 

loading into a data table 
selects the optimized compression scheme

compression is optimized 
    then faster 

distribution computing 

fast query performance 
start with a single node arch

massive parallel processing 

compute node hours 
    billed 1 unit per node per hour 
    cluster 
    2160 instance hours 
    charged for the cluster and not the leader node 

redshift security 

encrypted using ssl 
aws key management service 

multi az? no!
currently only 1 az
az
this is for management to run processing  
can restore snapshots to a new AZ in the event of an outage 

popular around the world 
advanced compresssion algorithm 

only one area of a disk rather than find all diffferent records sets across a lot of disks 
extremely efficient 
hardware and software layers 

