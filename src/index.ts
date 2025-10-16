import express from 'express';
import os, { hostname } from 'os';

const app = express();

app.get('/health', (req, res)=>{
    res.status(200).send("hi there");
    return;

})

app.get('/process', (req, res)=>{
    const process_id = process.pid;
    const host_name = os.hostname();
    console.log(host_name);
    const body = {
        process_id,
        host_name
    }
    res.send(body);
    return;
});

app.get('/cpu', (req, res)=>{
    let sum = 0;
    for(let i=0;i<1000000000;i++){
        sum += i
    }
    res.send(sum);
    return;
})

app.listen(3000, ()=>{
    console.log("server running");
});