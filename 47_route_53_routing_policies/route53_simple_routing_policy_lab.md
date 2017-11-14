route53 simple routing policy lab 
------------------------------

before log in 
quickly what are the different routing policies 
does not matter which exam 
scenario questions and choose the best route 53 routing policies 
same accross all 3 associate exams 

simple 
weighted 
latency 
failover 
geolocation 

set this on ec2 instnaces set up previously

simple routing policy 
user dns request 
    route 53 
        forward to ec2 in particular region 

its that simple 
    no intelligence 

by default have 2 record sets 
    start of authority 
    and 
    NS name servers 

look at name servers 
    there is some redundancy in names 

link dns record to ec2 instnaces 
create a record set 

create a naked domain name 
    an alias record 

similar to cname 
    
create one for the apex domain name 
want an alias record 

a records and quadruple a records 
alias target 
see our different elastic load balancers 
keep routing policies as simple 
wont evaluate the health 


load balancers do not have ipv4 addresses 
    have to go to dns 

lets test this 

dns is resolving to elb 
no intelligence 
