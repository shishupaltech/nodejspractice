
const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url==='/'){

        console.log('request event');
    }
    if(req.url==='/about'){
        console.log('request about');
    }
    res.end('Hello World');
})


server.listen(5000,()=>{
    console.log('Server listening on port: 5000....');
})
