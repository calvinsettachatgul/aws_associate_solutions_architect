
security token service
------------------------------

grant users limited temp service to aws service
    3 sources 
federation
---------------
    active directory
        saml
        temp access of active directory credentials
        allows single signon
        without assigning iam on aws credentials
federation mobile
--------------
    facebook/ amazon/google other OpenID 
    cross access
        from other aws accounts

detailed explanation
federation
    combining joining a list of users in one domain
    with another domain

identity broker 
    service allows 
    point A join it (federate it) with point B

identity store 
    Active Directory, Facebook, Google
    
identity 
    end users

give you a scenario
scenario

    in depth
    
    hosting company website 
    login in authenticate against active directory onsite on ec2
    secure IPSEC VPN
    users must log in and 

amazon service

step 1 
employee enters 
    username and password
application calls an identity broker
identity broker captures
    username and passoword
uses org GetFederationToken validate identity
    using LDAP 
correct 
        GetFederationToken
        IAM policy and duration
        1 - 36 hours
policy 
specifies permissions to be granted

sts 
    confirm of iam policy user 
    gives permission to create new tokens 
responds with 9 values 

return temp sec credentials 
data storage application 
    make request to amazon s3


amazon s3 uses IAM to verify cred allow requestsed operation on the given s3 bucket and key
  
9 steps to exam

1 
    develop identity broker
    develop in house
2 
    ldap then with aws sts
      then could ask what role is associated with user?
    
3 
       application uses role to interact with s3 



scenario 2 

1 identity broker
2 instead of user authentication 
    but could assume a role
    power user? 
    admin?
    predefined role from active directory

    using roles rather than credentials 
4 application uses role to interact with s3
