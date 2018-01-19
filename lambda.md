lambda
------------------------------

revolutionize aws 

creating serverless architecture 

little while to appear in the exam 

introduce and show you what it is 

serverless website 
    lambda and api gateway 

    s3 polly lambda 

help you study for the exam 

look at the future what does serverless look like ?


brief history of cloud 
    developer 
        dont like computer hardware 

10 day provision time 

=> amazon ec2 
    infrastructure as a service 

didnt have to provision 

infrastructure as code 
infrastructure as a service 
    manage windows and linux 
    some corruption 
    have to reinstall 
    only goes so far 


azure platform as a service 

elastic bean stalk on aws 

still running on service still running on physical machines 
    still have to think about the OS 

azure 
    came out with paas
    uploading your code then aws 
    provisions the resources 
that was great 
upload your code 

still managing OS 
    windows and linux 

containerization 
    popularirity 
    docker 
    
talk a bit about docker 

docker offering ecs 

containers are isolated and light weigfht 
    keeping them running 
    scaling 
    loading 

lambda 
    dont have to manage data centers 
    iaas
    paas 
    containers 
    only have to worry about code 
think about the event triggers 


worry about the code 

encapsulation 
    datacenter 
    hardware assebly code 
    high level languages 
    OS 
    application layer aws api 
    lambda 

compute service upload your code to create lambda function 
    aws takes care of provisioning 

    event driven compute source 
    respond to events 
        changes to data source 

    respond to http request 
        api gateway 
    amazon aws sdks 

show you visiually 
    react to an event or a trigger 
    upload a meme 
        triggers an event 
    take the meme and text and encode 
        store in s3 
    lambda triggers another lambda 
    triggers another 
        takes image and copies to another s3 bucket 
    communicate with other amazon services 

sqs
sns 
other services 
one instance of lambda working but multiple lambdas can be invoked 

automatically scaling out with lambda 

scaling up vs out 

scaling up resources in a single unit 

scaling out increasing the number of units and instances that has the processing power 

lambda one function 
    print hello world 
    1million users then 1million diff functions will be deployed 

main thing is the diff types of lambda triggers 


compute and go to lambda 
    have some functions 
    next couple of lectures  

blank functions 
    decide our triggers 
    region specific triggers 
    go to northern virginia its released there first 

remember these going into the exam 

around the core services 
alexa 
cloud front 
cloud watch 
code commit 
api gateway 

creating a meme 
compute service responding to http request 

1million free invocations per month 

node js
java 8
C#
python 2.7 3.6

how is lambda priced?
    # of requests
    1mill 
        .20cents per 1million thereafter 

distruptive interms of cost 
low cost not paying per minute

billed on duration 
    execution to termination of function 

.00001667
    for every GB-second utilized 

max threshold for execution time 5 min 

one function triggers the next one 

no servers 
continuous scaling 
focus on your code 

continuous scaling 
lambda 
and 
api gateway 

super cheap 
and scales 

online education 
own datacenters etc 
acloudguru scales automatically 

amazon echo 
    amazon alexa 
    lambda is invoked 
    speaking back to you 

free course on acloudguru
    indepth paid course 10 skills 

do have time check that out
scales out
1event 1fct
lambda is serverless 
which are serverless 

lambda cand trigger another lambda or x # of lambdas 

architectures will get complicated 
nightmare to debug 

aws xray service to understand what is happening 
lambda is globally 
know which triggers lambda 
max of 5 min duration time 

different languages available 

serverless website 
convert text to audio 
put that into the website then download the notes 
