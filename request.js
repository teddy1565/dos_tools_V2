const axios = require("axios");

async function attack(){
    for (let i = 0;i<10;i++) {
        await axios.get("");
    }
}
attack();