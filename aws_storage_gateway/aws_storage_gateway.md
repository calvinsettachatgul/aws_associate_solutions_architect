connects on premasis device to integrate with online aws storage 

your data center 
propagate or replicate to aws 

to s3 
or to glacier 

aws storage gateway appliance available for download 

4 types of storage gateways

file gateway nfs flat files
    word files 
    pdf 
    videos pictures 
volume gateway iscsi
    database
    not stored on s3 
        stored volumes 
        cached volumes 
            only most recent 
tape gateway  (VTL)
    backup archiving solution 
    virtual tape 
    then to s3 and lifecycle policies 

old names 
    gateway cached stored 
    virtual tape librarry 

start with easiest gateway 
    file gateway 
        newest gateway 
        NFS 
        mount point 
            storing in s3 
        ownership and time stamps 

    nfs

    direct connect 
        dedicated communication line 
    through vpc also 
        sending information to s3 
        native s3 objects 

    architecture 

moving on to volume gateway 
    disk volumes 
        iscsi 
    operating systems
    applications 
    databases 
        think of as virtual harddisk 
async backup 
point in time snapshots 
stored in cloud as EBS snapshots 
    volume gateway 
    virtual harddisk on premis and back up as virtual harddisk on aws 
  snapshots are incrmental   
    changes made from last snapshot are backed up 
    compression 
    minimize storage charges 

2 diff types of volume gateways 
    imagine 
    virtual harddisks on prem 
    back them up to aws 

    stored volumes type 1 
        store entire locally 
        asyc back up to aws 
        taking snapshots of EBS 
        moving them s3 
        
        mount as issscsi device 
        back data up to s3 in the form of ebs snapshots 
            snapshots are incremental 
            size 1gig to 16 tb 

    diagram 

        ISCSI
        virtual hard disk provisioned by storage gateway 
        stored on physical infrastructure 
            storage gateway 
                direct connection  
                multipaart uploads
            then snapshots go to s3 

    cached volumes 
            let you use s3 as primary data storage 
            frequently retaining access data 
        not complete data on prem 
        only most recent data most data on s3 

        store up to 32 tb
        store data that write in s3 retains recently read data on prem 
        dont have to have large storage arrays 

    designed unstore volumes 

    gateway 
        cached volumes 
        all data goes to s3 

here is our cached storage 
    there is an upload buffer 
        when uses write data go to cached storage 
    virtual disks sit inside s3 
        suspect ebs volumes  
    cant have blocked based storage on s3 
        but some kind of ebs 

    some kind of ebs storage 
    everytime write data its storaged in s3 

    a bit complicated 
        dont freak out
        hang in there 

volume tape gateway 
    used for back up 
    virtual tape based back up 
    on taped gateway 
existing tape volumes on premis
supported by:
    net back up 
    backup exec exec
    Veeam

virtual tapes backed by s3

   virtual tapes uploaded to s3  

all sounds complicated 
    storage or back up background 

ec2 section of the course and watch this section again 

going into the exam only need to know at high level 

exam tips 

filegateway 
    word and pdf images videos on s3 
    not database or os 

volume gateway 
    iscssi protocol 
    stored volumes data set stored onsite and backedup to cloud 
    cached volumes 
        entire data is on cloud and cached onsite 

gateway virtual tape library
    popular backup applicatios like NetBackup BackupExec Veeam

4 different gateways choose?

storage cost to a min for flat files 

data centers and back up of all servers and physical tape library iron mountain?

volume gateway 

media company 
    huge amounts of storage dont want on site all time time 

financial analytics want small latency 
    for all the data want min latency 
    onsite but back up all to site 


move on !
