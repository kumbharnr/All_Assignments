var events = require('events');
var eventNamess = new events.eventNames();

var eventname = function eventname()
{
    console.log("eventName is :"+eventNamess())
}

eventNamess.eventNames("evenname",eventname)

