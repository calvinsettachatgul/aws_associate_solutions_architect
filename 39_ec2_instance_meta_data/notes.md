learn about instance metadata

data about the ec2 instance
public private ip address
how to access from the command line

go over to ec2 instance

launch instance amazon ami

t2 micro

assign s3 and next

call it meta data

hit next

normal security group
web dmz use my private key

hit view instnaces 
it has gone live and ssh into it

public ip address

ssh into it

ssh ecw-user@<ipaddress> -i key.pem

get our meta data

curl http://169.254.169.254/latest/meta-data/

returns a whoel bunch of varialbes

public ip address

write this to a webpage my public ip .html

written to it


has written the ip address to it?

having done the bash scripting lab imagine what you would use that for?

write ip address hostname etc

move over to s3 bucket

set action on s3 bucket
so that lambda function does something as s3 written

then write dns name to route53

remember that addresss!

after the metadata

curl http://169.254.169.254/latest/meta-data/
curl http://169.254.169.254/latest/meta-data/public-ipv4
curl http://169.254.169.254/latest/meta-data/public-ipv4 > mypublicip.html

this is not a valid url
always after the meta data
