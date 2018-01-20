route53 latency routing policy lab
------------------------------

latency routing policy 

may guess 
allows to route based on lowest latency 
which will give you fastest response time 

resource record set for the amazon ec2 or elb in each region that hosts website 

latency based routing 
connecting up to route 53 

determines the latency of eu-west-2 
54ms 
determines the latency of ap-southeast-2
300ms 

then send to eu-west-2 and not ap-southeast-2

create a new record set 
naked domain name or zone apex network 

set for london and change routing policy to latency 

vpn into sydney
vipor vpn client 

show all server locations 

connect to sydney 
route53 making website request and will think you are in sydney 

automatically going to sydney 
because sees me in sydney it will be faster if set traffic to sydney 
