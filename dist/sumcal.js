function process_division(num, workers) {
    const size = Math.floor(num / workers);
    let x = 1;
    let y = size;
    let rem = num - y;
    let workers_task = [];
    while (y != num) {
        console.log("hi");
        let chunk = [x, y];
        workers_task.push(chunk);
        x = y + 1;
        rem = num - y;
        if (rem % size == 0) {
            y = num;
        }
        else {
            y = y + size;
        }
    }
    return workers_task;
}
const task = process_division(10, 3);
console.log(task);
export {};
//# sourceMappingURL=sumcal.js.map