custom vbs
and elasticl load balancers

webserver and sql server

create a load balancer

there are application load balancers

there are classic load balancers

create it in custom vpc

give our load balancer a name

need to select subnet for each az where you want to the traffic to be routed for each load balancer

want high avail then need 2 publci subnets

internet facing load balancer

lets say az goes down eu-central-1a

then no way for load balancer to serve traffic to a nother az

it is a design consideration
if you want high avail

then you want 2 public subnets and 2 private subnets as well

don't want to be reliant on only 1 az


