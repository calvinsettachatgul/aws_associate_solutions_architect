build a serverless webpage with api gateway and lambda
------------------------------

what is the website going to look like 

user hits a dns 

resolve through route 53
s3 bucket 
get index and error

push button to api get function api gateway 
lambda 
api gateway 
to response 

lambda function hellocloudguruslambda

You don't have permission to access billing information for this account. Contact your AWS administrator if you need help. If you are an AWS administrator, you can provide permissions for your users or groups by making sure that (1) this account allows IAM and federated users to access billing information and (2) you have the required IAM permissions.

create a lambda function  

error 
s3 
push a button and request to api gateway 
trigger a lambda functiuon 
write your name 

log into aws console 

lambda author from scratch

basic information 
Name
myServerlessWebsite
role name 
HelloCloudGurusLambda

create a new role 

simple micro service permissions 
in policy templates 

have confirguration 
have triggers 
monitoring 

edit the code inline 

upload a zip file 
upload from amazon s3 
most of the time edit inline 

runtime environment 
for developer associate exam 
what are the different run time environments 

handler info 
how to execute 

where did you download your resources 

def lambda_handler(event, context):
    print("In lambda handler")
    
    resp = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
        "body": "Ryan Kroonenburg"
    }
    
    return resp

this is python not nodejs
you've got your handler 

index.py
file is index.py

the method is def function_name 

index.function_name
event we are going to trigger 

look at other things 
environment variables 
key value stores 

use them in the next labs 
execution roles 

use 128 for memory basic good for this course 
how long is this code going to execute for? 
    if you have buggy code and an infinite loop 

scroll up configuring code 
go to our triggers 

add a trigger 
    depend on region 
    no alexa 
    only available in ireland 

add a trigger 
    go over to virginia 
    us-east-1

api gateway to do a trigger 
open to the public 

api warning open to the public 
people visit api gateway will triggger lambda function 
get the arn 
for api gateway 


submit will deploy a new api gateway 

arn:aws:execute-api:us-east-1:546584284880:kp73qklrrk/prod/ANY/myServerlessWebsite
click the link go into api gateway

like the UI 
go to a website 
sending an http method 
    get request 
    goes to url 
hitting api gateway 
    proxy it through to lambda 
    lambda responds 
        triggering function myserverless website
    proxyied back and response and sent to client 
only want a get request 
delete any 

create a new method get request 
