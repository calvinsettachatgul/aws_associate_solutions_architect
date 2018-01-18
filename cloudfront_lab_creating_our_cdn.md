cloud front lab creating our cdn 
------------------------------

take a note of region 

go over to s3 

make an upload an image 
make the image public

create a cloudfront distribution


there are 2 different types 
    web 
        websites 
    rtmp 

create a distribution 
 a lot of options! 

what you have to know is what it is at a high level 

origin domain name 
origin path 
    sub folder 

orgin id 

restrict the bucket access 
force to always use the cloudfront url 
    have to create a new identity 
create a new user 
    apply permissions to that user 
    
custom headers? 

default cache behavior settings 

TTL
    time to live 
    route 53 or dns section 
    how long objects exist in the edge locations

365 days in seconds 
    always done in seconds 
24 hour default 

come up in the exam 
    objects update every 24 hours 
    then ttl 24 hour is no good 
    difficult to clear off the edge locations 

important design consideration 
rarely update images 

    can restrict viewer access 
    signed urls 
    signed cookies 

prevalidated urls 
you have paid 
do the same with signed cookies 

distribution settings as default 
preventing sql injection 
cross site scripting 

alternate domain names 

custom ssl certificates 
aws certificate manager 
use the default 
ipv6 

http2 

using cloudfront to server private content 

takes a long time to create 
takes a long time to update 

changed to deployed 
you can create other origins 
    multiple s3 buckets 

general 
origins 
behaviors 
error pages 
restrictions 
    can create white and black lists 
invalidations 
    remove them from cloudfront locations 
    something confidential you don't want it out there 
    create an invalidation 
        it does cost you money 
tags 
    leave as default 

check the download speed 
    get around browser caching 
        browser caching 
        permissions remove read access for everyone 
    
    
get the url for the cloud front website 
d1m4m7cgi6l7ez.cloudfront.net

paste in the domain for cloudfront 
for the asset 

https://s3-ap-southeast-2.amazonaws.com/mysydneycloudfrontdist-calvin/acloud-guru-logo.png
access denied 

invalidate objects but it costs you money

used for uploading files as well

more in exam tips 

delete cloudfront 
