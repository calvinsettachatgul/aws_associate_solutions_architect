network access control lists vs security groups 
------------------------------

difference between 

using sec group extensively 

used to adding security group adding port 80 
havent used nac list 
user guide 

vpc 
quick read 

compare sec group with nac list 

sec group 
    instance layer first 

nac list 
    subnet level second layer of defense 

increased secuirty 

supporting allow rules on sec group only 
nacl deny rules alloed as well as allow rules 
    deny ip address 

stateful ness 
    sec group inbound auto for outbound 

    nacl then need to be explicit about inbound and outbound 

one is stateful and one is stateless 
    allowing traffic 

rules processed in numerical order 
    with nacl 

sec group only applies to instance 
    instance has to behind the sec group 

nacl 
    auto apply with all the ec2 in that subnet 

european region 

    10.0.1.0
    10.0.2.0

play around with the public subnets 
    create the vpc 
    network acl created 

inbound outbound traffic allowed automatically 
    however custom network acl 
    auto all inbound outbound traffic is denied 

stop people from getting confused 


custom network acl 
    default network acl with private 
    custom nacl to public 

span subnets and az 
    remember one subnet one nacl 

go into vpc

network access control lists 

create a custom network acl 

rule numbers increments of 100

default acl 
    inbound outbound traffic is denied 

add the subnet association 
    to the public subnet in the custom vpc 

whats going to happen 1 an 1 subnet

timeout 
inbound and outbound rules are denying 

set up rules 
http 
ssh 
rdp 

ephemeral ports 
open 
1024-65535
