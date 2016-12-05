what are the differences between
nat instance
nat gateway

any subnet associated to route table internet access automatically

private subnet associated with default route table
no internet connection 

cannot access internet either

can't install mysql need to make it secure

need to beable to install mysql

nate instance or nat gateway

traditionally everyone uses nat instance

nat gateway released in 2016

what you prefer to use in production scale automatically

no security groups
patching maintaining

how to install nat instance 
act as a gateway to internet
then delete
and install nategateway



aws console
go over to ec2 and launch an instance

go over to community ami's and type in nat

choose the top one
amzn ami
hvm virtualization

t2 micro next
deploy into vpc

put it into public subnet

leave everything else as default call it my nat
put it behind security group

my webdmz

nat gateway don't have to worry about sg

but nat instanc ehave to be behind sg

boot from ssd storage

hit lost
my german key pair
couple of min to boot up 
then next

create a route out to the internet via natgateway

wait for nat instan ce to boot up

it is alive

actions networking
change source destination check
has to be 
enable source/destination check

disable it 

go over to sg
for webdmz don't have the htttps enabled

add https
always recommend https and http for nat instances

last thing you need to do 

create route from private subnet
then to nat i nstance then to outside interent

route table

have public route
dont need to make any changes to public has route out automatically 

change the defualt route table
add another route

0.0.0.0/0
target will be the nat instance

click on that and click save
in theory private subnet 

any ec2 launched into private subnet will be able to have a connection to nat and to the interenet

run yum install mysql -y

gone out and installed mysql

delete the nat instance the uninstall mysql and install it

kill off the nat terminate the instance

now in theory 
the ec2 in pvirate subnet nolonger has a route to the interent


yum install mysql -y

killed off nat instance
cant download!!

go back to vpc now create a nat gateway


create new nat gateway 

specify which subnet
alwasy deploy to the public subnet

ask for elastic ip

don't have one right now so hit create


in order to use nat gateway
ensure edit route tables

to ensure connetion to 
nat

have  alook at routes

deleted the nat instance the status is a black hole

remove that

add another route

0.0.0.0/0 
target is nat gateway

then click save

don't need to 
with our nat gateway don't need to distable source destination check not behind security group

doesnt have a securyt group here

does take a couple of min to prepare the nat gateway

cool thing: dont have to maintain it yourself

now available
in terminal window
in private subnet yum install mysql -y

summarize what we have just done!

also we have disabled source destination check on nat instance

this is a single point of failure lost the az?

then lose everyting

put it behind an autoscaling group

set the min number to 1
provisioned back to public subnet

then have to have multi public 

now using natgateways and don't have to use nat instance


directly to nat gateway and to the internet gateway


nat gateway always in the public subnet

then reference in the route tables

in aws docs

look at those
latest user guide in networking see a comparisson of nat gateway and nat instance

implemented with redundancy

script to manage failover

10gbits per second

band with of the instance typed

t2 micros not a good idea in production
any surging traffic fall over

common question on the exam

scale it up increase the instance size or change the family support larger network volume

good thing about nat gateway already build in interms of mainenance

performance is optimized

nat instance is a generic aws linux ami

depending on how you use the nat instnace

security groups can't associate a security group

network acl's control traffic for nat gateway and nat instance

operate at a subnet layer

main difference
nat gateway always used for production

more so than nat instance
single point of failure automating the failure is easier

nat instance has been around longer than ec2

not as relevant now bc nat gateway

most important
remember disable source/destination check
nat instan ce must be in public subnet
	one subnet is 1 az
must be route out of the private subnet of NAT instnace in order for this to work
amount of traffic nat instnace supports depends on nat size

stop that bottle neck is to increase the size

create high Avail using autoscaling groups

multi subnets in different az and script to automate

then nat gatteways created

the way forward
prefered by the enterprise

scale auto upt to 10gbs
no need to patch 
no need for security groups
auto assign public ip

if update update route tables to point to nat gateway
no need to disable source/destination checks


