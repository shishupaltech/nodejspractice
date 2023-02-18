//          STREAMS 
//      Writeable 
//      Readable 
//      Duplex 
//      Transform 

// const {writeFileSync} = require('fs');
// for(let i=0;i<1000;i++){
//     writeFileSync('./content/big.txt',`hello world ${i}\n`,{flag:'a'});
// }

// default 64kb 
// last buffer - remainder 
// highWaterMark - control size 
// const stream = createReadStream('./content/big.txt',{highWaterMark:90000});
// const stream = createReadStream('../content/big.txt',{encoding:'utf8'});

// const{createReadStream} = require('fs');
// const stream = createReadStream('./content/big.txt',{highWaterMark:90000,encoding:'utf8'});
// stream.on('data',(result)=>{
//     console.log(result);
// })
// stream.on('error',(err)=>console.log(err));

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big.txt','utf8');
    // res.end(text);
    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',()=>{
        res.end(error);
    })
})
.listen(5000);

