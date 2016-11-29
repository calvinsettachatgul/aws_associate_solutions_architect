don't confuse cloudwatch with cloudformation or cloud trail

cloudtrail for auditing purposes

its not used for performance monitoring

cpu utilization
that is what cloud watch is for

go to ec2
first things is option for 
	whether or not monitoring is enabled  this is detail monitoring

there is basic pole every 5 min

detail is pole every 1 min
not included in free tier prices

free tier 3 dashboard basic monitoring and 5 min poling
metrics

data ingestion 5 gig
5 gig data storage per month

detail monitoring at 1 min frequency basic monitoring
poling every 5 min

go to cloud watch
	to the left different things dashboard alarms and events

go to metrics see the ones that are available in this region

ebs 
ec2 
elb
s3

add them to a dasboard

create a dashboard right now don't have any

my overview

now created overview dashboard metrics
metric graph widgets

a visual dashboard
know about ec2 instance

know certain things

interested in cpu utilization can see a history
see a spike

usually below 2.5%
before creating a widget these metrics are on hypervisor level

memory is missing

sysops course this is the reason
exam scenario talking about which metrics available
create a cpu utilization metric

cpu utilization widget over 3 hours

change it to the last day and it will update dashboard
change it to last 3 hours

add additional widgets not just ec2

add s3 widget 
	# of objects
	bucket size in bites
	rss or standard storage bucket size

create widget
add as many as you want 

dashboard showing you what you want to see add things from s3
whatever service
brand new account

lets move on to a couple of other things

cloud watch events allows you to react to changes in aws environment
invoke a lambda to update dns entries when ec2 instance in the running state

ec2 is provisioned lambda updates dns

go to logs
cloud watch logs is a great service
pci dcs
go and install agent on ec2 sends monitoring data about that data to cloud watch logs and you can see that data

cpu disk network utilization
https response codes in apache logs

app monitoring clever tool

great for pci dcs

have to create a log group
sysops admin exam

have a look at alarms
look at creating an alarm

based on metrics prepopulated 

for cpu utilization

call it alarm threshold

cpu util > 80%
use it as the description

>= 80% for one consecutive period 

period is 5 min or 1min

over 80% for 1min and then take action
create a list
	an email list
	

that will send an email saying there is an aalarm threshold 
cpu util has gone over 80% 

leave the alarm 
> or < =


<= take an action

go in and terminate the instance

whenever cpu util <= 5% for 1min not using that ec2
go in and terminate the instance

optional notification
go in and terminate the instance

ec2 instance in a load balance pool

less than = 5% for entire day won't need the ec2 also will cover using autoscaling groups later in the course

standard monitoring turned on by default
detail monitoring you have to subscribe
1min poling
what can we do with cloudwatch?

dashboard?
add own widgets
allows you set alarms when thresholds hit
then take action in event of alarm

cloud watch events
	helps you respond
	changes aws resources

trigger lambda function update the dns
outside scope of the exam sysops associate exam

cloudwatch aggregate monitor and store logs

http events
http codes from apache
and send it to cloud watch logs


cloud watch and cloud trail

cloud trail is for auditiing

cloud watch is for performance monitoring





