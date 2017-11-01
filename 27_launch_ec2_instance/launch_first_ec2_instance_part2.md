launch our first ec2 instance lab part 2

splash screen 1 running intstance 
1 key pair that we created 
there are 2 security groups 
our webdmz security group 

created automatically 

go ahead and click on the 1 running instance 
make it bigger medium size 
see our description 
state 
type 
private dns 
private ip address 
public dns 

paste the public ip address 
converts the public dns to the ip address 
there are no elastic ip 
security groups 

key pair name 
myec2 keypair 
termination protection is true 
terminate 
action instance state stop reboot or terminate 

you get a warning and can't click on yes 

change termination 
setting 
actions 
    instance settings 
        change termination settings 
    hit refresh 
termination protection has turned to false 
have status checks 
learn the diff between these 2 

system status check verify that instance is reachable 
network packets reach the instnace 
power networking or software systems 
checking the underlying hypervisor 

instance status check is chcecking the traffic 
instance status check then reboot the system 

sysops administrator 
monitoring 
basic monitoring is every  5 min 
then every 1min 

disable termination protection 
allow you to terminate the instance 

2 types of status checks
    
go over how to create reserved instances  

upfront price for 3 years 
156 dollars 
works out 52 dollars a year 

don't want to do this if you are just learning aws 
keep within free tier 

encrypted boot volumes 
add volumes 
    cant encrypt the root 

    have to create an image and a copy 
    then encrypt that root device volume 
    can't encrypt the default root volume 

how to create ec2 
how to ssh 
how to create security on the ports 

installed apache 
web page 
navigate to the web page 
public dns and the public ip address 

key points 
termination protection turned off by default 
on ebs backed 
    default is to be deleted when the instance is deleted 

turn that off by unchecking the box 

virtual hard disk 

can the ebs root volume be encrypted 
the default ami's can't be encrypted 
encrypt option no check box 
can use 3rd party tools 

create a copy of the ec2 ami 
encrypt during creation 

can you encrypt a root device root volume ? 
using 3rd party 
cant for default root ami 
have to create an image 

spin up an image with the default ami

can use 3rd party tools bit locker 
creating the copy then encrypt 

scenario based questions can you encrypt a root device volume 
    amazon 
    default root ami
additional volumes can definitely be encrypted 

learned a lot 
    how to provision 
    attaching ebs 
    security groups 
    opening a port 
    how to update 
    how to create a server web page and navigate to that webpage 
    
need to use putty to ssh into ec2 instance 
generated in a .pem 
ppk files 
