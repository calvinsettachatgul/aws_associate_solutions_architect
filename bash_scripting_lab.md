
bash scripting lab 
------------------------------
log into to aws console
text wrangler 
create a simple homepage 

<html> 
    <body>
        <h1>
            Hello Cloud Gurus!
        </h1>
    </body>
</html> 

bash script 

#!/bin/bash
yum update -y
yum install httpd -y
aws s3 cp --recursive s3://mywebsitebucket-calvin/ /var/www/html
service httpd start
chkconfig httpd on 

automated the deployment of a web server 
pulled down the data from s3 
this leads into autoscaling 
