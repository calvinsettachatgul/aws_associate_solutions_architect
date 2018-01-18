
s3_security_encryption
------------------------------

securing buckets

default all newly created are private 

could not access the new file 
access denied 

make the file publick 

set up access control 
bucket policies are bucket wide 
    to entire bucket 
access control lists 
    drill down into objects 

secure using these 2 features  

s3 bucket can be configured 
    to create access logs 
    done to another bucket 
    done to another aws account 

move on to encryption 

encryption 
------------------------------
   4 diff methods  
        2 types 
            intransit sending data to the bucket itself 
                https
                ssl/tls
            data at rest 
                4 diff methods 
                server side  3 diff methods 
                    s3 managed keys sse-s3
                        unique key 
                        master key and aws handles the key management
                    AWS key management service  sse-kms 
                        managed keys
                        envelope key 
                            added protection 
                        another benefit:
                            additional transparency 
                        audit trail who is decrypting what and when 
                    customer provided keys sse-c
                        you manage the encryption keys 
                        encryption and decryption  
                    
                client side
                    you encrypt on the client side and upload it to s3
            
thats it cloud gurus 
    secure buckets 
    bucket policies 
    acl 
    turn on your logs 
        different accoutns 
    to and from to s3 

    data stored 
        3 diff methods 

    client side encryption 
