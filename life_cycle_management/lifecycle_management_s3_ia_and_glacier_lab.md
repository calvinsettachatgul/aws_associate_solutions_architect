go over to services 
glacier 

for glacier archival 
not available for every region 
change over to somewhere it is available 

create a new bucket 

acloudgurulifecyclepolicies
manage lifecycle rules 
add filters or tags 

those particular names or tags apply 

always have a verion of previous version and current version 

configure expiration? 
current version could be expired after 425 days 
    why does it default to 425?
   see your lifecycle rules here  

    create an awesome graphic 

can understnd just reading 
that is a lifecycle rule 

can be used with or with out versioning 

automate transitioning tiered storage 

transition to IA 
    128kb min size 
    30 days after creation date 
archive to glacier 
    default 30 day 
permanent delete 

understand at a high level 

minimize on storage cost 
use lifecycle management 

create a lifecycle rule 

MyLifeCycleRule

add a tag 
only specific objects with a tag will apply in the rule 

start with current version 

transition to st IA after 30 days 
object has to be > 128 kb

transition to amazon glacier after 60 days 

30 days to std IA 

60 days to amazon glacier 

previous version 

object becomes a previous version days after object creation 

can be cautious and move to IA after 30 days 

glacier after 60 days 

lets hit next 

config expiration 
when do you want it to expire?

after 425 days after creation 

previous versions the same thing 

cant enable cleanup 
expired object delete 

can see lifecycle rules
awesome graphic

go ahead and hit save 
created lifecycle rule 
what are hints and tips

can be used in conjunction with versioning 

current version or previous versions 


use it to permantently delete objects

minimize on storage costs 
