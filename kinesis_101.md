kinesis 101
------------------------------

what is streaming data 
data that is gen continuously 1000s of data sources 

small sizes kb of data 

purchases made on amazon.com 
transactions 
stock prices 
game data 

social network data 

geospatial data uber 

sf uber office 
tech conference 

geospatial data 
where your uber driver is and give you the fast route to go 
iot 
    sensor data 
    temperature 

kinesis send the streaming data 
    load 
    analyze 
    build application 

stream 
fireshose 
analytics 

key understanding of service 
streams 
    data producers 
    sending to kinesis streams 
        store the data default 24 hours can increase 7 days 

        stored in shards 

7 day retention 
    storage in shards 

data consumers 
    take the data 
    turn it into something useful 
    aggregation 
    sentiment
    prediction of cost 

stored in other service dynamodb 
s3 
mapreduce 
redshift 

5 transaactions per reads 
    max read rate of 2mb per second 1000 record per second for writes 
    max total write rate 1mb per second 

kinesis firehose 
    similar 
    data producers 
    
    sending to firehose 
    dont have to worry about shards streams 
    manually adding shards to keep with the data 
analyze with lambda in real time 
    send over to s3 
    analytics is optional 

no data retention window 
    firehose as soon data comes in 
    analyzed or sent to s3 

    other locations 
    redshift
    send to elastic search cluster 
    
firehose is automated way of doing kinsesis

kinesis
shards streams 
    consume the data 
transform that data 
    
firehose 
    automated 
    send to firehose then to s3 or other service 
    analyze using lambda 
    no shard management 

kinesis analytics 
    kinesis firehose 
    streams 
    sql queries 
        to store that data in s3 reshift or elastic search cluster 

sql type querying 

exam tips 
    know diff between stream and firehose 

    core architecture differences
    shards -> kinesis stream 
    analyzing data automatically lambda -> firehose 
    not worying about shards 

