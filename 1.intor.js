
// globals -no window 
// __dirname - path to current directory 
// __filename = file name 
// require = function to use modules(CommonJS);
// module = info about current module(file);
// process = info about env where the program is being executed 

console.log(__dirname);

setInterval(()=>{
    console.log("hello");
},1000);
console.log(__filename);

const amount = 12;
if(amount<10){
    console.log("small number");
}
else{
    console.log("large number");
}

console.log(`hey it's my first node app!!!`);


