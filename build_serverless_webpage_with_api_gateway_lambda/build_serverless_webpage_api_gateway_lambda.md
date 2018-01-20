build a serverless webpage with api gateway and lambda
------------------------------

what is the website going to look like 

making a get request
user hits a dns 

resolve through route 53
resolve to s3 bucket 
get index or error
    html files 

push button to api get function api gateway 
    trigger get request to apigateway 
        lambda 
            prints out your name 
    api gateway 
    to response 

lambda function hellocloudguruslambda
returns your full name 

You don't have permission to access billing information for this account. Contact your AWS administrator if you need help. If you are an AWS administrator, you can provide permissions for your users or groups by making sure that (1) this account allows IAM and federated users to access billing information and (2) you have the required IAM permissions.

create a lambda function  
------------------------------

error 
s3 
push a button and request to api gateway 
trigger a lambda functiuon 
write your name 

log into aws console 

    create lambda function  
    lambda author from scratch

basic information 
Name
    myServerlessWebsite
role name 
    myLambdaExecution 

create a new role from template
    Simple Microservice permissions 
        gives basic execution role 
    in policy templates 

see: 
have confirguration 
monitoring 
    designer 
        function code with IDE
            cloud9
            paste code here 
have triggers 

environment variables
    pass variables into our code use this in the next lab 

edit the code inline 

execution roles 
    define our roles 

Basic settings 
    Description
        My basic Lambda Website 

have timeouts 
    3 seconds then terminate the lambda function 

upload a zip file 
upload from amazon s3 
most of the time edit inline 

know the runtime environment of lambda functions for the developer associate exam 
    should know what are the different run time environments 

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

can do a number of things with the get 

allow lambda proxy 
us-east-1
myserverlesswebsite 

actions deploy api 

stage 
prod 

deployment message 
myfirst deploy 

click on get and invoke url 


get back to different stages 
click on get 
click on get 
see your name 
its all working 

set up an s3 bucket 

myserverlesswebsite 

add the get invoke url to the get request in index.html

add public read access 

can add a bucket policy 
to make the entire bucket public 


click the button on index 
then you will change the name 

created a role in iam 
click and see the policies associated with the role 

2 roles 
see the policy statements that allow for lambda read and write to dynamo db

read and write access to s3 also 
you can add additional permissions 

continuously update this role 

configure route 53 to re route the request 

if you have your own domain name 

route 53 register your own domains 

you can do that if you want to play around with domain names 

hosted zones 

ns record 

alias targets not available 
the bucket name has to be the same as the s3 bucket 

no server is easier to manage than no server

serverless website using polly 
generate an mp3 file from notes 
