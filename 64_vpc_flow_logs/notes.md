this is the last lab

flow logs will not come up in the exam

but sysops yes

if you're not doing exam can skip this

can create VPC flow logs

join in aws console

go over to vpc

click on vpc check boxx

create a flwo log IP traffic flow information

capture all traffic 

report to cloud watch

right now no IAM for cloud watch 
setup permissions

create new iam role
flow logs role
policy document to send it to cloud watch 

click allow
go back into vpc

click down here flow logs role

no log groups created right go back

and hit cancel go back into cloud watch

go and create some logs

click on logs and create a new log group

my custom vpc logs

go back to vpc managment consoel

create a flow log 
that is literally it

any traffic going into vpc will be logged

go back to webpage and hit a refresh

enable vpn


there we go can load teh web page fine
cloud watch it will take some time

cloud watch click on logs

create a log stream

call it mylogstream

create

there we go

now we have our log stream

log stream created

refresh page to webserver

then cloud watch can see a log stream that is craeted

some entries are already there

using vpc flow log

go into vpc and create it 

create an iam role

create a log group
inside log group create a log stream

after that stream data right into cloud watch

build monitoring and metrics

still quite new

may or may not come up in the exam

log all traffic in custom vpc

move on to next lecture summary


