dns 101

just teach you about dns

won't go into route 53 too much


what is dns?

its a phone book
look up joe smith in telephone book
acloudguru

convert human friendly domain name into ip addressess


ip addresses
ip4
and ip6

ip4 has been around forever

4billion different addresses

32 bit field
more and more connected and different devices online

will start to run out of ip4 addresses


ip6
128 bit space
340 undecillion addresses

support for ipv6 is not that good at the moment in aws

watch this space with amazon

moving on to domain names

top level
google.com
bbc
acloudguru

stirng of chara separated by dot
the last string is the top level
.com
.edu
.gov

second level
.co.uk
.gov.uk
.com.au
will be co
gov
com 
these are optional

big database of top level domain names

do add domains

.cloud as a domain name

domain registrars

domain names have to be unique

it is an authority

service such as ICANN

popular registry are GoDaddy.com
123-reg.co.uk

internic is a service of ICANN

who is database

setting up a domain name with route 53

name of the server that supplied the data for the zone
administrator of the zone

SOA records stores information about

current version of the data file
number of seconds a secondary name server should wait before checking for updates

max # of seconds name server should wait before retrying failed zone transer

***NS Records***

when create zone in route 53 will be given a lot of NS records

take it to your domain registrar
go daddy console

take the records and apply these to your domain registrar

fundamental type of record

A record address record
used by computers to translate domain name to an IP address

talking about A records talking about IPv4 address

if talkinga about IPv6 then quadruple A record

TTL record

time to live 
length of time dns is cached on server or computer

caching in local cache if if visits again won't have to make another request

think from architect point of view


sometimes have to do a dns change

before doing a migration drop the ttl down to a short amount of time


some dns goes to old site or some go to new site

lower the ttl of dns records down to 300sec
which is 5 min

lets move on to c names

resolve 1 domain to another

may also want to use mobile to resolve to the same address

move on to alias record

aws has created

aws and route 53
very similar to cname

map one dns name to another

playing with dns

naket domain name has to be an A record

domain name without the www is the naked domain name
also ref to as zone apex record

alias record
auto maps
naked domain name to elastic load balancer

exam tips

elbs do not have predefined public ip address only dns name
dns endpoint

this can be a problem

create an alias record
resolve naked domain name to a dns address


alias record and cname

charged for request if using cname
if alias record won't be charged

9 out of 10 chooose alias record over a cname

what are domain registrars

registar is an authority

InterNIC service of ICANN

WhoIS database

125 per month
go out and buy the domain itself will be a few dollars a month

start of authority record a few points

name of the server 
	supplied data for the zone

administrator of the zone
current version of the data file
number of seconds before checking for updates
number of seconds retry
max # seconds secondary name server can be used

ns records?
name server records


go into GoDaddy console
take the ns records and apply 
traffic will be directed over to route 53
fundamental type of record

A record
used by computers to translate name of address to IP address

talking about a records talking ipv4 records
quadruple record?

thing to note is the ttl record time to live record
lenght of time cached on resolving server or own computer


pc check whether has address in cached
else does request to resolving server

pull a record for a cloud guru

cache in its local cache
if visit again won't have to do another request
how long kept in cache?


if adding additional arecords or servers in production
or moving to aws from azure

before doing the migration drop the ttl to 5min or 300 sec

if you don't do that will have going to old site and going to new site

do the migration a couple days later only affected for 5 min window

lets move onto cnames
cannonical names
dns1 -> dns2

resolves to the same address

move 1 domain name to another

lets move onto alias records
aws has created
only in aws ecosystem in route 53 system

similar to cname
map from
map resource record sets in hosted zone to elb cloudfront distrib, s3 buckets that are configured as websites

alias records work like cname record 
	map dns name example.com to another 'target' dns name (elb1234.elb.amazon.com)

key difference cname can't be used for naked domain names (zone apex)
