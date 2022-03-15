const { fork } = require("child_process");

for (let i = 0;i < 100; i++) {
    let child = fork("./task");
    child.on("close", (code) => {
        console.log(code);
    });
}
