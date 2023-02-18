
const EventEmitter = require('events');
const customEmitter = new EventEmitter();


customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name} ${id}`);
})
customEmitter.emit('response','john',12);
customEmitter.on('response',()=>{
    console.log(`some other logic here`);
})
customEmitter.on('response',()=>{
    console.log(`data recieved`)
})

// customEmitter.on('response','john',34)