iam summary
------------------------------

what have we learned so far?

iam consists of 
users 
groups 
roles 
policy made up of policy documents
    
policy documents 
    json 
    key value pairs 
    attributes and values 

nest using square brackets 

from admin access 
saw something like this attribute version and date
    start to nest if use the square brackets
    wild card

need to allow action to any resource
does help if you can read it 
    familiarity with json

don't need to know how to program to pass the exam 

    what does each one do?
    rare to get a question to evaluate a policy document

iam is universal does not apply to regions
    region does not matter 
    consistent across the platform

root account
    first account during set up of account 
    complete admin access by default
    create users opposite is true
        no access to do anything when first created 
        have no permissions when first created 

key id and secred access key given to user when created 

don't confuse with passwords
    programmatic access key id and secret access keys
    cant log into console with them 
    if you lose them then you cant get back to them

can use with command line or sdk or apis 
view those credentials only once 

have to set up multifactor auth on root account 
    critical security step 
    get warning message if first log into iam
    password rotation policy
        3 characters expire every 90 days and not reused 

thats it for iam 101

mentioned will 
come back to this to look at it in more detail

end of course then deep dive into iam management
learned a lot 

next session 
ec2 main backbones of aws 
provision linux web server 
php sdk and learn a lot 

s3 section big topic lots of labs and good to play with 
    use s3 personally to store files in the cloud rather than locally on laptop
have time move on to 
