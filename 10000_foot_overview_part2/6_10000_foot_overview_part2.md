10000 foot overview 
start out with storage

storage 4 different compontents
s3 almost as old as aws itself

talking about files word documents 
images
text files


not an application or a database
object based storage

not block based storage

place to put objects in the cloud
dropbox
    used s3 
    have metadata in their own storage
    objects exist in s3 today 

glacier
    requirement from the ssa or reg body
    files stored for 7years but need not instant access
    data archiving
    storing for compliance reasons

3 - 4 hours to retrieve

efs
    elastic file service
    file based storage and share it 
    could install database and applciations
    share with multiple vms

what does s3 stand for simple storage service

storage gateway 
    onpremise data center connection
    virtual machine image and communicate with s3 
    doesnt come up on developer 
    comes up on sys devops exam

s3 object based not databse or application

efs or ebs for server storage
elastic block store is ebs
virtual ec2 connenction to storage

databases 
    fundamental part of all exams
    RDS mysql postgresql mariadb sqlserver oracle
    aurora
    postgresql

    RDS in the course
    solutions architect and sys devops

developer exam
    dynamodb
    diffeernece between the 2 
really scaleable
    performant
    getting away from traditional
    dynamo db course 0 to hero 


essential for developer exam 

redshift
    datawarehousing 
    query when run a report
    dont run on a production database
    
    run query on query that is not production 
    this is calculations and analysis
    use redshift for analysis or reporting
    
for big data specialty cert 

elasticache
    cache the data in the cloud 
    shop front top 20 items 
    vacuum cleaner
        image and name does not change

    take a load off the database by caching the data that does not change

    mostly in the devloper exam

    take a load off of the databse
    use elasticache

migration services
    snowball 
    import export

    
net profit for a toaster in asiapacific

redshift for big data speciality cert

click on a vacuum cleaner 
    take the data out of the database 
    take a load off of the DB

take oracle database and migrate to oracle

minute 640

services part 2

compute 

ec2 
elastic bean stalk
ec2 container service 
lambda

light sail 
    vps service 
    provision with server and fixed ip address

watered down version of ec2 

batch 
    batch computing 


storage 
------------------------------
s3 is oldest 
efs 
glacier 
snowball 

storage gateway 
    virtual machines on premise 
    

databases
------------------------------
RDS
DynamoDB
Elasticache
Red Shift
    querying complex
    data warehousing 

migration 
------------------------------
aws migration hub 
app discovery service 
db migration service 
    visualize

server migration service 

snowball

networking and contnet delivery 
------------------------------
vpc 
    route tables 
    security groups 
        fundamental part of 3 ass exams 
    cloudfront 
    route53
        go through and buy a domain name 
    api gateway 
        create your own api 
    
    direct connect 
        dedicated line 
        into vpc 


developer tools 
------------------------------

    codestar 
        project management 
        collaboration 
    codecommit 
        store code 
        source control service 
    codebuild 
        compiling and deploy 
    codedeploy 
    codepipeline
        continuous integration 
    xray 
        root cause analysis 
    cloud9 
        ide environment 
        aquisition 


