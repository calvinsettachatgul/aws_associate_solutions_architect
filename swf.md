simple workflow service 
------------------------------

compare to sqs 

make it easy to distribute work a mong distributed system

coordination of tasks 

simple work flow in their warehouses 
use their services 
practice what they preach 

verify the order 
    ec2 

    checking order is in stock 
    different decision logic 

try and charge the credit card 
    may not go through 
    charge success
        ship the order 
        human interation here 

    parents have ordered a toy 
    someone in the warehouse has to get the toy

human worker marks for shipment 
    there will be record completion 
    db saying yes it has shipped with tracking number 

does it make it easier?
    worker 
        get task
        process task 
        return result for it [
    decider 
        controls  coordination of tasks
        ordering concurrency scheduling according to the app logic 

