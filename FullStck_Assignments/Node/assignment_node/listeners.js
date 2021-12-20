var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 =function listener1()
{
    console.log("listener1 is executed......");

}

var listener2=function listener2()
{
    console.log("listener2 is executed ...")
}

eventEmitter.on('myevent',listener1);
eventEmitter.on('myevent',listener2);

eventEmitter.emit('myevent');
