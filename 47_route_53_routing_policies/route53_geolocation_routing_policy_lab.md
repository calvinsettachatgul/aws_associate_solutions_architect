route53 geolocation routing policy
------------------------------

route traffic based on source location of request 

european customers 
route european customers to eu-west-1
US customers 
route US customers to us-west-1

delete the record sets and hit confirm 
use an alias 

use a european 
go for geolocation 
where end customer location 
    regions 
    customers 
    sometimes specific states 

euro 
    euro dns queries 
hit create 

hit another record set 
    sydney
    change geolocation 
    lets choose default 
    everywhere else 

we hav eour 2 records 
    geolcocation and * 
lets test this 

hit refresh and hitting london webservers 
    have our vpn client fired up 
choose some other country  

alt tab back to chrome 
refresh the page 

hellocloudgurus.com 
    page is not working 
    stopped sydney in last lecture 
    
ec2 is online and hit refresh 
    hellocloudgurus this is sydney west 1 

connect vpn and refresh and back to london 


