nac lists vs security groups

go to vpc userguide click on security in vpc
scroll down

first point operates at the instance level
sg
first level of defense


network access control lists
operates at the subnet and this is a second layer of deffense

deny specific ip addresses

add increaased security to vpc

allow rules only?
for sg

network acl allow and deny rules

security groups are stateful
	open up port 80 inbound then outbound is allowed

network acl always have to specify both

security group only applies after instance is put behind the sg

custom network acl's

custom vpc

european central region

public and private subnet

rules are always accessed in order

remember vpc comes with default network acl


each subnet assocaiates with network acl

if not then auto to default network acl

only one network acl at a time

if associate then previous is removed

contain a number of rules 
block it next rule then it take precidence


network acl's are stateless

responses for inbound

don't apply for outbound

sg's are stateful

so inbound open then outbound opened automatically

that is it for this lecture
