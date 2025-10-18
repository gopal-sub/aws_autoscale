import cluster from 'cluster'
import os from 'os';
import { app } from './index.js';


const cores = os.cpus().length

if(cluster.isPrimary){

    for(let i = 0; i< cores; i++){
        cluster.fork();
    }

}else{
    app.listen(3000, ()=> {
        console.log("server running")
    })
}

