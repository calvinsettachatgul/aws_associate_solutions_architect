sqs
------------------------------

simple queue service 

first ever aws service that was availabe 
oldest service 
what is it at high level 
components 

oldest service 
message queue

distributed queue system 


temporary repository 
consumed by another component

website to genererate memes 

photo of cloud guru instructors 

turn it into a meme 

store photo in s3 
trigger a lambda 
send data of image to sqs 
what the top bottom of the meme should say 
which s3 bucket upload to?

fleet of ec2 
pole sqs service for jobs to do 
ec2 constantly pole 

stores to the s3 bucket of diff bucket

auto scaling based on sqs queue 
to provision more and more ec2 instances 
if you lose an ec2 wont lose those jobs 

anotehr ec2 can pick that up 
sky scanner 
google flights 
scan airlines and gets you the flight deal 
get a holiday best possible flights 

query to ec2 
take what the user is looking for and package it up into sqs 
ec2 is pull based system 

rather than push based system 
simple notification system 


looking for job to do 
get that job 
see what flight they want 
interrogate the aairline servers 

user chooses the best flight for budgets and needs 
time 

did not have sqs 
pass info to app server 
app server crashes? 

user will lose the query 
sqs if crashed still in queue 
disappear 
visibility time out 

then ec2 comes up and process 
decoupling of infrastructure 
run independently 

configure auto scaling and monitor sqs queue 
provision ec2 to process the messages 

then you have cooldowns
bring elasticity to application 
standard queue
fifo queue
standard is default 

2 types 
whether its allowed? 

nearly unlimited transactions per second 
occasion more than 1 copy of message delivered out of order 
best effort ordering but cant be guaranteed 

fifo 
do guarantee order 
order in which arrive 
strictly preserved 
message is delivered 
fifo queue 
300 transactions per second 
    limit 
wont appear in the exam yet 

high level and key facts 
pull based 
256 kb in size 
kept for 1 min to 14 days 
    default is 4 days 
visibility time out 
time message is invisible after reader picks it up 

message becomes visible again and another reader will pick it up again 
visibility time out to 1 min 
big data analytics 
come back into the queue
5 min to process that data 

visibility timeout maximum is 12 hours 

sqs guaratnees at least once processing 
but could be processed a couple of times 
visiblity time out < time to process the job 

regular short poling 
    even if message queue is empty 

long poling 
    save you money wont constantly pole an empty queue

this can increase cost by polling too many times when there is no queue
