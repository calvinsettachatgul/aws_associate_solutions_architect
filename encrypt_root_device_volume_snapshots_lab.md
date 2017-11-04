
ecrypted root device volumes and snapshots
------------------------------

stop the instance before taking a snapshot

copy the snapshot to a different region 
option to ecrypt the copy 

creating a copy of the snapshot and tramsitting to another region 
copy the snapshot to eu(london)

change the region to london
actions and create an image off of this snapshot

use this ami to boot our ec2 instances from 
root volume will be encrypted

launch is outside of free tier
select m3 medium 
restriction to m3 and c3
this is outside of free tier
select m3 medium 

add a storage 
root device volume is encrypted 
    this is becuase copied snapshot
we have the ami market place 
purchase ami
rent an ami by the hour 
    palo alto networks 
    firewall 
    1.28 an hour 
    .10 an hour 

community ami 
-----

understand that they wont be encrypted at rest 
    encryption keys held in your own account 

terminate the instance 
    wont need it 
    action instance state 

instance state terminate

go into ami's and deregister amis

delete your snapshots 

what have we learned 
create a snapshot that serves as root device 
    stop the instance 
    snapshots of encrypted volumes are encrypted automatically 
    volumes restored from encrypted are encrypted as well 
    share snapshots only if encrypted 


share with other aws accounts or make them public 
    use amis for? 
    install apache 
    configure the way you want it 
    base web code 

    create a snapshot of that base image 
    boot webservers from there 
    dont need to copy your webcode over 

    use amazon machine images 

    learning how to create snapshots 
    instances from those snapshots 
