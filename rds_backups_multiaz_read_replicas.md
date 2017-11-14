rds backup multiaz read replica
------------------------------

compare to dynamodb 
2 different types of backups 
    automated 
    snapshots 

recover in a particular retention period 
    7 days auto 
snapshot 
    full daily backups 
    
backups defined window 
    3am every morning rds is not used time 
    storage io may be suspended 
    or experience latency 

snapshots user initiated 
    manually performed 
    stored even after rds is deleted 

automated and manual snapshot 
    restored is a new rds instance with new endpoint 

encryption only for mysql oracle postgresql mariadb
    everything is encrypted 
        backups 
        read replicas 
        snapshots 


read replica and multiaz
read rep 
    used for scaling 
multiaz 
    for disaster recovery

read replicas of read replicas 
    but latency 

    async replication 
