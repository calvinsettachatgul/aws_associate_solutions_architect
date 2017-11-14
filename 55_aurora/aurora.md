aurora
------------------------------

created by amazon 

compatible only on aws 
import over to aurora 

mysql compatible 
simplicity and cost effectiveness of open source 

price point 1/10th of commercial db 

big challenge to oracle 

cover in next slides 
what advantages? 

fraction of the cost 

advanced launched by amazon 

wont be on the exam just yet 

get feedback and no aurora questions

what does it do what is it 

scaling capability 

scales in 10Gb increments 
soon as cross 10Gb get another 

32vcpu 244gb storage of memory 

there is downtime 
a maintenance window 

2 copies of db in each az 
min 3 az 

6 copies
of data 

handle up to 2 losses of copies 
without affecting read 

3 copies without affecting write 

automatically healing qualities 
and auto repair 

2 different types aurora replicas 

aurora replicas 
    seaparate from original aurora 
up to 15 

mysql read replica 
currently 5

failover difference 
    auto failover to aurora 

    not auto occur to mysql read replica 

important to note this is not covered in free tier 
budget 5 - 10 dollars 

dont leave it running!

irish region 
only available in certain region

amazon does push aurora 
at the top it says amazon rds for aurora 
launch a db and use mysql it will suggest aurora 

its like typical rds 

but there are db instance class 
r3 large 
r3 8x large 

quite a heavy machine 

multi az deployment 
this means a replica in a different zone

type in acloudguruaurora

same username and password 

failover different tiers 
different priorities 

during failover 
one that takes over becomes the highest tier 
there is priority logic 

hit next 
advanced settings 
rds secruity group 
default vpc 
web dmz 

cluster identifier 

dont provide a default cluster identifier 

make up the dns address of the database instance 

enable encryption ? 
encrypt at rest 
aws key management system 

monitoring? enhanced monitoring? 
maintenance 
    maintenance windows 

launch the instance 
db instnace is now being created 

launch 2 instances 

because turn off have only 1 instance 
can take up to 5 to 10 min 

aurora instnace is available 
multi az no 
this is a writer 

eu-west-1 
zone 

6 copies of data spread across 3 az 

single virtual machine 
    single point of failover 

auto failover 
create an aurora replica 

what you do 
aurora replica source the source database 
acloudguru replica 

publicly accessible? 
yes 

different az?
az no preference 
then separarte one to primary 

failover
tier1 failover 
tier 1 will always be the first one it will fail over to 

replication role is a reader 

if you have to write traffic it will be the writer role 

creating a cluster 

use in connection string 

point out the multiaz 
says 2 zones 
another read prelica of the primary 
can have more than 2 
as many az in the region 

us-west-1 4 az
pause the video here 

replica is available 
role is a reader 

cluster endpoint 
fail ? 

rather than instance endpoint 

then goes to the same cluster endpoint 

couple of more things 

instance actions and create a failover

create a replica if you want to 

but now delete the replicas

it costs us money 
want to create a final snapshot?
will ask on the primary one 

delete? 

need to delete read replica first before delete cluster 
do you want to create a final snapshot 
