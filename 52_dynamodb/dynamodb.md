dynamodb
------------------------------

what is dynamodb 
mobile 
web 
gaming 
ad-tech 
iot 

developer associate 
ssd 
3 geograph distict data centers 

always 3 geo locations 
not az 

3 different facilities 
have redundancy built in 


eventual consistent read 
strong consistent read 

all copies of data is consistent within 1 sec 

strongly consistent 
    all writes recieve a successful response after the write 

if wait for write to propagate 
    then eventual consistent 

dynamodb processing 
------------------------------
write throughput 
read throughput 

charged on storage cost 

pricing example 

1mil writes and 1mil reads per day while storing 3gb of data 

11.6 writes | reads per second

dynamo db expensive for writes but 
    cheap for reads 

only want reads and scaleable 
    then want to look at dynamodb as opposed to rds 

set up dynamodb table 
------------------------------

call it acloudgurunosql
add in primary key 
    studentid

leave everything as default 

read and write capacity to 1 

only 1 read and write cap unit 
hit create 
it us usually quick to create a table 

dont know anything about table wont do a reservation 

dashboard and table 
add an item 
create an item 
row in the table 

append 
    drop something down under the student id 
    field firstName string 
    'Ryan'

studentid firstname 
create a second row 

studentid 102 
string firstName 'Elizabeth'
add a second field 
insert above the first name 
surname 'Jones'

created a second column 
naming convention then you have the same column 

dynamically add columns because nosql 

with dynamodb dont have relationships that you have to maintain 
    add columns for all the record sets added 

search for a table 

bring up the students with surname with 'Jones'

start searching then elizabeth has come up 

this is it for adding creating records for dynamodb

metrics read and write capacity units 
provisioned 
consuming 

allow to chane read and write to pay what you are consuming 

update your capacity 

change on the fly 
really easy to scale push button scaling 

updating the values and hitting save 

snapshot then read replica 
adjust the instance size 
cant add more read replicas 
push button scaling of dynamodb 

there is no down time in dynamo

really scaleable 

rds harder to scale and will have some down time 

basic beginner guide to dynamo

