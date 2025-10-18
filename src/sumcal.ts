function process_division(num: number, workers: number){
    const size = Math.floor(num/workers);
    let x = 1;
    let y = size;
    let rem = num -y
    let workers_task = []
    while(y != num){
        let chunk = [x,y];
        workers_task.push(chunk);
        
        rem = num - y
        
        if(rem%size == 0){
            y = num;
            x = y + 1;
        }else{
            x = y + 1;
            y = y + size;
            
        }
        
    }
    return workers_task

}

const task = process_division(10,3)
console.log(task)