create  raid group of volumes
application consistent snapshots of volumes

redundant array of independent disks

there is raid 0
gaming pcs
stripe 2 volumes

stripe across 2 disks
very good performance but no redundency

raid1 is mirrored
mirroed exact copy
good thing is redundancy

raid5 3 disks or more then writing pairity to each disk
aws highly discourages raid5 
spread across multiple disks
pairity check sum 
if one fails build again 

good in real world but not on aws

raid10 
combination striped and mirrored redundant and good performance

when do you use?
don't get the io that is required
need higher disk io?

add multiple volumes and create raid array to get the disk io desired

on aws it will be raid 0 or raid 10

may get an exam question

may be for db that is not supported by aws 
cassandra
need to use db on ec2 solution?
add multi ebs volumes configured as raid array

configure as windows pc

application consistent snapshots of volumes

putting disks together and act as one volume

raid 0 gaming pcs

good performance but no redundancy

Password Decryption Successful
The password for instance i-085ba5ae7d44e2933 (MyWindowsVM) was successfully decrypted.
Password change recommended
We recommend that you change your default password. Note: If a default password is changed, it cannot be retrieved through this tool. It's important that you change your password to one that you will remember.
You can connect remotely using this information:
Public DNS	ec2-54-161-151-56.compute-1.amazonaws.com
User name	Administrator
Password	
jp!.FCgZo$(

downloaded app from app store
microsoft remote rdp
