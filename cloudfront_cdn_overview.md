cloudfront 
------------------------------
theoretical lecture on cloudfront

cloud front is a content delivery network 

what does that actually mean? 

take the world map running a website out of the UK 

access the webpage making a request to the server in the UK

undersea cables create greater latency not just a direct straight line 

access a webpage or a movie file 

what is an edge location?

location where content will be cached 
    all around the world 
    may not be a region but an edge location 

what is an origin 
    origin of all files where the CDN will distribute 
    s3 bucket 
    ec2 instnace 
    elastic load balancer 
    route 53 
    
distribution cdn consists of a collection of edge locations 

users all aroudn the world in multiple countries 
cached at edge location?

edge locations all around the world 
first user makes a request 
    distribution url 
    make a request 
        routed first to edge lcoation 

cached at edge location? 
    video file 

goes to edge lcoation and does not have it in its current edge location 

pulls it down to local edge location 
    there is a time to live 
    or 
    ttl 


no quicker than previous example 
    for first example 
    when second user accesses

now user pulling from local edge location 
    speeds up delivery of of asset 
    only first user experiences expensive time 

amazon cloud front is optimized to work with other aws services 
    s3 
    elastic compute cloud ec2 
    elastic load balancing 
    route 53 

    non-AWS origin server which stores the original definitive version of files 

web distribution 
rtmp distribution 

edge location 
    content will be cached here 
    50 edge lcoations in the world 

origin 
    s3 
    ec2 
    elastic load balancer 
distribution 
    cdn consists of edge locations 
web distribution 
    used for websites 
rtmp media streaming 

not for read only 
can write new files to edge locations 
    put a new object 
    put back up to origin 
        by replication 

cached for ttl 
can clear the cached object but will be charged 
    ttl 24 days 
    big update? 
    access the new version then clear the cache 

