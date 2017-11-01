
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

scenario

    in depth
    
    hosting company website 
    login in authenticate against active directory onsite
    secure IPSEC VPN

amazon service

step 1 
username and password
identity broker captures
uses org GetFederationToken
    using LDAP 
correct 
        GetFederationToken
        IAM policy and duration

specifies permissions to be granted

confirm of iam policy user 
  
9 steps to exam

1 
    develop identity broker
2 
    ldap then with aws sts
      then could ask what role is associated with user?
3 
       application uses role to interact with s3 



