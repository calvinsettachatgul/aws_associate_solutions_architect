
ami types ebs vs instance store 
------------------------------

2 diff types ebs backed 
    instance stored backed 

based on 
-----
region 
OS
architecture 32 64 bit 
launch permissions
storage for root device 
    instance store ephemeral storage
    ebs backed volumes 

go to ec2 
spin up ec2 instnace 
most root devices are ebs 

launch amazon linux ami 
    standard settings 
    call it ebs 
    standard security group 
    launch 

go to community amis 
------------------------------
    OS
    architechture 
    root device types 

    instance store 
        instance families 
        go for m3 medium 
        everything the same 
        
    following storage settings 
        attach additional instance store volumes
        can attach addional ebs volumes after launch 

        cant do that after launch of for additional instnace stores

        only ebs volumes 


call it instance store 
    review and launch 
    now have 2 instances 
    using ebs 
    using instance store 

with ebs 
    click on ebs store 
    actions 
    stop the instance 
    can take a snap shot in the 
        stop state 

instance store
    actions
    cant stop it 
        can only reboot or terminate 
    * critical difference can only reboot or terminate 
    with an instance store cant stop the instance  
    
    why would you want to stop the instance?
        sometimes scenarios  
        see the health 
        in status check 

    reports on the health status of the hypervisors 
    stop and start again 
        move it within the data center 
        cant do that with an instance store 

    
    on a failed host?
    you've lost the instance 
    its called ephemeral storage 
        means less durability

    everything on ec2 was instance store based before 
    aws was heavily criticized 
    not a lot of data persistence 
    
    another thing we can do
    this was volume in use 
        just created 
        detach from ec2 instance and then attach to another one 
        even though root volume 
    cant do that with instance store volume !

ami backed by ebs or instance store 
    for ebs 
        root device root device is ebs volume from embs snapshot 
    for instnace store 
        root device is instance launched from ami from a template stored from s3 
        takes time to provision 
            over ebs or backed by ebs 

if want fast provision time then ebs backed 

isntance store volume ephemeral storage 
cant be stopped 
will lose the data 

ebs can be stopped 

    reboot both 
    root volumes 
    with ebs volumes can tell amazon to keep the root volume and not terminate 
