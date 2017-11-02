
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

encryption 
------------------------------
   4 diff methods  
        2 types 
            intransit 
                https
                ssl/tls
            data at rest 
                4 diff methods 
                server 
                    s3 managed keys sse-s3
                    AWS key management service  sse-kms 
                        audit trail who is decrypting what and when 
                    customer provided keys sse-c
                        you manage the keys 
                    
                client 
                    you encrypt on the client side and upload it to s3
            

