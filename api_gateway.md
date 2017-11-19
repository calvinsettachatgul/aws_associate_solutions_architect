api gateway
------------------------------

fully managed service makes it easier to pub maintain monitor apis at any scale

how it works?
users

call to api gateway
send that call over to lambda 
send that to ec2 

high level 
some of the features 
api caching 
speed up the response rate 
reduce the # of calls to endpoint 

there is ttl in seconds 
respond to the cache or making the api call 

same call to api gateway 

cache for 60 seconds 
dont need to make that call again 
cached that for you 

what can api gateway do 
low cost efficient 
scale effortlessly 
throttle request to prevent attacks 
    fake api calls
connect to cloudwatch to log requests 

understand 
    troubleshooting 
    same origin policy 
    cross origin

cross-origin resource sharing 
    multiple domains 
    using cors 
    one way the server on the other end can relax the same origin policy 
resricted resources request from another domain 

fix that error message 
origin policy cannot read at the remote resource?
    need to enable cors on api gateway 

enable corrs 
remember what api gateway is on a high level 

increase overal performance 

prevent from abusing 
log to cloud watch 
javascript and ajax 

get an error message 
ensure cors turned on 
