
elastic load balancers lab 
------------------------------

instance is up and running 

in terminal 

ssh -i <pempath> ec2-user@<public ip> 

start an ec2 
healthcheck 
index

go back to the console 

create a load balancer 

relatively new 
    application 
        work at layer 7 
        application layer 
        best for http and https
        can do clever routing 
        
    classic load balancer layer 4 loadbalancer does it at the tcp layer 
        all questions 

        layer 4 loadbalancer 
        tcp layer or can do layer 7 routing 

external load balancer 
configure the health check and this is the guts 

using port 80
there is a ping path healthcheck.html
response time out 
    how long to take 
interval 
    how long to wait between health check 
    unhealthy threshold 
    healthy threshold 

add the ec2 
     only have 1 at the moment
adding the tags 
    elastic load balancers will cost you money so delete them 

serving both az automatically 
    in our default vpc 

given dns name for elb 

copy the dns into clipboard 
    health check configs 
    instances 
        right now out of service 

MyClassicELB-1083943366.us-east-1.elb.amazonaws.com

status is still out of service  

remove it from the load balancer 
simulate a failure

you don't get  public ip address for the loadbalancer 
will get one but amazon will manage it for you 

how do you point your domain name to the dns name 
lose an ec2 your web page wont go down 

create an application load balancer 
    deep dive course on app load balancer 
    interested in learning in depth ?

similar to classic 
use target groups 
MyAppELBTG

http codes 
does not have to be 200 

create our application load balancer 
go in and test it 
from provisioning to active 

just like classic wont get ip for 
will get a public dns 
listening on port 80 

see our monitoring statistics 

dns name copied 
MyApplicationELB-1278690354.us-east-1.elb.amazonaws.com

inservice or out of service 
    how many times passed or failed 
    looking for an individual file 
    index.html 

elbs have their own dns names 

amazon handles the dns resolution on their own 
in conjuction with route 53
that will go to elastic load balancer dns 

prepare for the exam read the elb faq 
concentrate on the classic elb 
deepdive? 
    course on application load balancers 
    labs you can do 

welcome to lecture 
cloud watch 
