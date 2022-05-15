const fs  = require("fs");

setInterval(randomizeSensorData, 5000);

function randomizeSensorData() {
    const data = JSON.parse(fs.readFileSync("db.json"));

    for (let i = 0; i < data.pharmacies.length; i++) {
        for (let j = 0; j < data.pharmacies[i].sensors.length; j++) {
            data.pharmacies[i].sensors[j].temp = Math.floor(Math.random()*10);
            data.pharmacies[i].sensors[j].hum = Math.floor(Math.random()*10);
            data.pharmacies[i].sensors[j].light = Math.floor(Math.random()*10);
        }
    }

    fs.writeFileSync("db.json", JSON.stringify(data));
}
