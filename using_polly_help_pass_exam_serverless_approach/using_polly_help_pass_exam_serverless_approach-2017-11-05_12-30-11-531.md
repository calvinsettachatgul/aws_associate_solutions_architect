using_polly_help_pass_exam_serverless_approach.md
------------------------------

using apigateway 
cross origin resource sharing 
cors

create a serverless application 

isnt exam related 
using apigateway 
cors 
in the exam 

overview 
users 

website hosted in s3 
entered into application 

put into dynamodb 
sns 
to polly service 
mp3 file 
update dynmodb converted to audio 
visit website and can do search 
scan of dynamo and return notes to you 

aws console 
not available in ever region 
change to northern virginia 

plain text 
read out to you 
listen to joanna 

download as mp3 

start getting set up 

create a table 

s3 static website hosting 
use index.html 
error.html

create an s3 bucket 
to hold audio files 

create an sns topic to 
create new posts 
topics 

have 3 different lambda functions 
    using the following:
        s3 store audio files
        dynamo store website 
        sns
    
need an iam role for lambda functions to use other services 
create custom policy
create LambdaPolicyForPolly

validate policy 
dumps you out of role 

have to go back into create role for lambda 
search for the custom role that you created 

create a role for the custom lambda policy just created 

create first lambda function 
author from scratch 

create a name for the lambda function 

PostReader_NewPosts

the way lambda works now is to create the function first and 
apply code to configure the lambda function later!
before upload the code and configure as you create 

python 2.7
go to resources section 
go and get the new posts code 

create a file on amazon servers that hosts lambda 
defining the event 

define the event handler as lambda_handler

pass in the environment variables 
pass into the lambda function 

DB_TABLE_NAME
SNS_TOPIC
the arn name for the sns topic 
arn:aws:sns:us-east-1:546584284880:new_posts

basic settings time out 
can leave at 3 seconds 

save the lambda function
test the lambda function 

configure a test event 

sample.json is not provided 

{
    "voice": "Joanna", 
    "text": "Hello Cloud Gurus!"
}

hit create 
