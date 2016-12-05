build your own custom vpc part2


how we can access that ec2 instance

launch a new instance

use an amazon linux ami
private subnet

auto assign public ip address is disabled

go ahead and click next

no bootstrap script fo this

call it 

MySQLServer
pretend

hit next create a new security group 

MyRDSSG

ssh into this security group also use mysqul
10.0.1.0/24

anything in this block range will be allowed to enter in this porch

also mysql/aorora

same cidr source

also allow 

all icmp specify through public subnet

security groups are stateful allow these rules and outbound is also auto allowed out as well


hit review and launch 

launch ec2 instnace use private key
view instnacese here

mysql server

not a lot that we can do! won't have a public ip address


now that has luanched
make a note of the private ip address

make a note of the public ip address

ssh directory private key

chmod 0600 mykey.pem

also copy the private pem

ssh into this instance

ssh ec2-user@<ip address> -i keypemfile.pem

can you ping the the server that is sitting inside the private subnet?

ping happens automatically


go into my vpc
and grab the rds security groups
delete all icmps and save

it should break the ping

it doesnt break the ping because connection has already been established

have to break the connection and reping

quickly add in icmp traffic back to security group

address range and hit save
and you can go back up and start pining

clear the screen and create a new document

private key to get into the database server

mygermankeypari.pem

paste in the contents

chmod it

now you should in theory beable to ssh use the public ip address


want to do -i
myGermanKeyPair.pem

now we are inside the ec2 instance that is in our private subnet

lets do a yum update -y

nothing is happening doesnt have a root out to the internet

can only talk to other ec2 instances

but only internally

the ec2 is useless because can't install mysql

use nat instances and nat gateways

nat

net work something translation

network address translation (NAT)

NAT instances and gateways

install in public subnets

where are we

created custom vpc

default table has no route out to the interenet

new route table has a route out to the internet

any subnets associeated with that table should have intenet connectivity

default route table does not have a route out to the inernet right now!

have our 2 security groups
allowing port 80 and ssh in from the world

security only in our private subnet

only from address range
any from ip range 10.0.2.0/24

we need interenet acess

want to prevent people from directly accessing 

we can use a nat instance or a nat gateway

have been around for a very long time

NAT gateways released in 2016

theya re def preferable in production

scale in production

don't have to worrry about patching 

maintaining

aws will take care of it for you



once done nat instance

delete it then do nat gateway

this will be our nat instance

join me in the aws console

go over to ec2
and launch and instance

eaasiest way to get a nat instance go to the community ami's 

amazon ami
vpc nat
hvm virtualization
this is the one that will be used for the lecure


t2 micro

into myvpc

into public subnet

10.0.1.0

leave verythign else as default

call it myNAT

click next

put it under a security group

with nat instance it must be behind a security group

with nat gateway aws will handle it for you




couple of minutes for nat instance to boot up

nat instance is alive

change source destination check

route traffic through the nat instance
any traffic comming back we want

no point having a database server without mysql
don't have a public ip address , but we do have a private ip address

ssh ec2-user@<public ip address> keypair.pem

ssh'd into ec2 instance
elevate priviledge to root

ping the private server?

stop the ping?

if you delete the icmp
then break the ping

connection is already established

quickly add icmp traffic to rds security group

and the address range
hit save

go back to the ec2 instnace and you can start pining


create a new document a private key to get into the database server

mygermankeypair.pem

paste the contents of the private key pair

chmod it

mygermankeypair.pem

ssh ec2-user@<private ip address> -i


