this is theoretical diff between nats and bastion servers

you've built both already then you'vec reated instances and nat gateways

nat instance is to route traffic to ec2 insances to private subnet

able to connect out to the internet

can't connect via rdp 

if you want that then you need a bastion host
or jump host

rdp or ssh

to administer them
using ssh or rdp

to administer them

then you have 1 hardened bastion

access all the hosts through this one bastion

do that over a private network connnection

nat instances are very much on their way out using nat gateways

nat instance alwasy behind sg

gateway are not behind
not necessary

maintenance taken care by aws

bastion make it available

2 public subnets
2 private subnets also?
if bastion host goes down auto scale deploys to one az or the other

nat instances do something similar but have a script to handle failover

interms of exam tips remember the differences 

provide internet traffic



bastion instance to securely adminster

in private subnets

these are jump boxes
jump on tothis server

and then ssh into the private subnets
