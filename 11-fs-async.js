const{readFile,writeFile}=require('fs');

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }else{
        console.log(result);
        const first = result;
        readFile('./content/second.txt','utf8',(err,result)=>{
            if(err){
                console.log(err);
            }else{
                const second = result;
                writeFile('./content/result-sync.txt',`Here is the result: ${first}, ${second}`,(err,result)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    else{
                        console.log('done with this task');
                    }
                })
                
            }
        })
    }
})
console.log("starting next task");


const {readFile,writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err));


const start = async()=>{
    try{
        // const first= await getText('./content/first.txt');
        // const first = await readFilePromise('./content/first.txt','utf8');
        // const second = await readFilePromise('./content/second.txt','utf8');
        const first = await readFile('./content/first.txt','utf8');
        const second = await readFile('./content/second.txt','utf8');
        await writeFile(
            './content/result-mind-grenade.txt',`This is awesome:${first} ${second}`,{flag:'a'}
        )
        console.log(first,second);

    //  const second =await getText('./content/second.txt');
    //  console.log(second);
    // console.log(first);
}
    catch(err){
        console.log(err);
    }
}
start();
