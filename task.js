const { Worker } = require("worker_threads");

for (let i = 0;i<100;i++) {
    new Worker("./request.js");
}