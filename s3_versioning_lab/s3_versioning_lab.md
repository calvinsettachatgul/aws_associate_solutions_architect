
s3 versioning lab
------------------------------

need to log into aws console
bucket created early 
    turn on versioning 
    important to know that you can't turn off versioning once enabled

    can't disable 
    only suspend
    keep multiple copies of files
        inside s3 bucket
        storing 
        keep files as individual file 
        every single version kept as individual file

    large files but don't change often
    large files and prone to change then don't want versioning
restore a previous version
    by downloading the previous version

clicking and going down to bin 
    delete the latest version
    now latest version is the 18 byte version

delete the object entirely
has it deleted?

placed a delete marker on the object but the object is still there on the delete marker 

delete the delete marker which restores the object to the original version 
upload another object

good use case for version control everytime the file changes there will be a copy of the original and the latest
appears in s3 bucket as object but now taking 37 and 18
55 bytes in total

bare in mind 
    digital media company 
    large files in s3 buckets 
    version control might not be a good use case
    make changes to media files which are big 


s3 versioning in google

how can you retore?

deleting the latest version

MFA delete 
requires additional authentication 
disabling versioning 
permantently deleting objects

concatenation of 

be aware of this on a high level 
stopping people 
protecting from deleting an object in a bucket


s3 versioning exam tips
------------------------------
versioning
    all versions of an object
    including all rights 
    even if delete object 

once turned on can only be disabled not deleted

integrates with Lifecycle



