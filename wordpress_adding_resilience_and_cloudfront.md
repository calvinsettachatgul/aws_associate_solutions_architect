buiding a fault tolerant wordpress site: lab 3 adding resilience and cloudfront
------------------------------

force to use cloud front urls 
rather than ec2 urls 

have a back up of the code to an s3 buckets

s3://acloudguru-wordpresscode2017calvin
cloud front for images 

acloudguru-wordrpressmedia2017calvin

copied up to the above bucket 

acloudguru-wordrpressmedia2017calvin

aws s3 ls 
acloudguru-myserverlesswebsite-calvin
acloudguru-pollyaudiofiles-calvin
acloudguru-pollywebsite-calvin
acloudguru-wordpresscode2017calvin
acloudguru-wordrpressmedia2017calvin
mywebsitebucket-calvin

copying files 
aws s3 cp --recursive  /var/www/html/wp-content/uploads/2017/* s3://acloudguru-wordrpressmedia2017calvin
***
syncing files


url rewrite rules

serve pictures from cloud front 
url rewrite rule 

resources section 

get it from a bucket 

wget https://s3-eu/west-1.amazonaws.com/acloudguru-wp/htaccess

url rewrite rule 

automate it so that everytime a new upload it will push to s3

origin for the cloudfront cdn 

use cron 
to sync automatically 
