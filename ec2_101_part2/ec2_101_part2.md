ec2 101 part 2

ebs 
storage volumes attached to virtual machines 
s3 object based storage not for OS or database 

ebs is block based storage 

placed in specific az 
    auto replicated to protect from failure 
    ebs back up stays online 
    not auto replicated 
    stay within the az but not dependent on one physical device 
    have redundancy built in 

4 types ebs 
    gen purpose ssd gp2
        price and performance ssd 
        3iops per gig 
        10000 iops available 
        burst up to 3000 iops for extended periods of time 
    provisioned iops ssd i01
        I/O intensive larage relational or NOsql database 
        need more than 10000 IOPS
        can go up to 20000 IOPS per volume 
    throughput optimized HDD (ST1)
        big data 
        optimize the throughput 
        big data data warehousing log processing 
        cannot be a boot volume 
    cold hdd sc1 
        lowest cost storage 
        file server 
        maybe you dont access the files 
        cannot be boot volumes 

    magnetic standard 
        lowest cost per gigabyte that is bootable 
        workloads infrequent access 
        lowest storage cost is important 

what will we cover 
    launch and ec2 
    security gorups 
    volumes and snapshots 
    create an AMI
    load balancer and health checks 
    cloud watch 
    aws command line 
        on laptop or desktop 
    iam roles with ec2 
    bootstrap scripts 
    launch config groups 
    autoscaling 101
    efs elastic file system 
    lambda concepts 
        build a serverless webpage  
        build serverless website with polly 

exam tips 
what should you remember 
    on demand 
    spot 
    reserved 
    dedicated host 
    based on scenario 
    if spot 
        if you terminate the instance then you pay for the hour 
        aws terminates a spot bc price limit reached 
        then you get the hour in which you terminate for free 

    ebs consists of 
        ssd gen purpose 10000 iops  
        ssd provisioned iops 101 > 10000 iops
        hhd throughput optimized st1 frequent accessed workloads 
        hdd cold sc1 less frequent accessed data 
        hdd magnetic bootable cheapest bootable 
    typically using ssd 
    maybe magnetic for warehouse or keeping costs low 

important point cant mount 1 ebs to multiple ec2 instances 
    think of internal hard disk cant connect to multiple computers 
    cant mount ebs volumes 2 multile 

    need shared efs 

instance types 

dr mc giftpx    

    
