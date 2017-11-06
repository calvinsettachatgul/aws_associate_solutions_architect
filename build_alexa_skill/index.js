var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);


    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },

    'GetNewFactIntent': function () {
        var say = 'Hello Ryan! Lets begin studying for our exam!' + getFact();
        this.emit(':tell', say );
    },

    'AMAZON.HelpIntent': function () {
         this.emit(':ask', 'Learn everything you need to know about Amazon Web Services to pass your exam by listening to your very own study notes. You can start by saying, Ryan help me study.', 'try again');
     },

     'AMAZON.CancelIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     },

     'AMAZON.StopIntent': function () {
         this.emit(':tell', 'Goodbye Cloud Gurus');
     }
};

//  helper functions  ===================================================================


function getFact() {
    var myFacts = [
    '<audio src=\"https://s3.amazonaws.com/acloudguru-pollyaudiofiles-calvin/f8a7f7c2-a97c-42e8-bc77-eb079dc50e96.mp3" />\'',
    '<audio src=\"https://s3.amazonaws.com/acloudguru-pollyaudiofiles-calvin/85fbb1cd-b3a7-4100-96a7-00f2d7005a85.mp3
" />\'',
    '<audio src=\"https://s3.amazonaws.com/acloudguru-pollyaudiofiles-calvin/23a1038b-86a7-4bf9-af0d-83d9f34b6b03.mp3
" />\''
        ]

    var newFact = randomPhrase(myFacts);

    return newFact;
}

function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    var i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}
