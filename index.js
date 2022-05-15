const fs  = require("fs");

if (fs.existsSync("db.json")) {
    console.log("db.json already exists. Randomizing sensor data...");
    setInterval(randomizeSensorData, 5000);
}
else {
    console.log("db.json not found. Generating new database.");
    generateDatabase();
    console.log("Database generated. Restart this script.");
}

function randomizeSensorData() {
    const data = JSON.parse(fs.readFileSync("db.json"));

    for (let i = 0; i < data.pharmacies.length; i++) {
        for (let j = 0; j < data.pharmacies[i].sensors.length; j++) {
            data.pharmacies[i].sensors[j].temp = Math.floor(Math.random()*30);
            data.pharmacies[i].sensors[j].hum = Math.floor(Math.random()*100);
            data.pharmacies[i].sensors[j].light = Math.floor(Math.random()*100000);
        }
    }

    fs.writeFileSync("db.json", JSON.stringify(data));
}

function generateDatabase() {
    const db = {
        pharmacies: [
            {
                name: "farmacia1",
                address: "adresa1",
                sensors: [
                    {
                        name: "sensor1",
                        type: "depo",
                        location: {
                            lat: 1,
                            long: 1
                        },
                        temp: 0,
                        hum: 0,
                        light: 0
                    },
                    {
                        name: "sensor2",
                        type: "transport",
                        location: {
                            lat: 1,
                            long: 1
                        },
                        temp: 0,
                        hum: 0,
                        light: 0
                    }
                ]
            },
            {
                name: "farmacia2",
                address: "adresa2",
                sensors: [
                    {
                        name: "sensor1",
                        type: "depo",
                        location: {
                            lat: 1,
                            long: 1
                        },
                        temp: 0,
                        hum: 0,
                        light: 0
                    },
                    {
                        name: "sensor2",
                        type: "transport",
                        location: {
                            lat: 1,
                            long: 1
                        },
                        temp: 0,
                        hum: 0,
                        light: 0
                    }
                ]
            },
            {
                name: "farmacia3",
                address: "adresa3",
                sensors: [
                    {
                        name: "sensor1",
                        type: "depo",
                        location: {
                            lat: 1,
                            long: 1
                        },
                        temp: 0,
                        hum: 0,
                        light: 0
                    },
                    {
                        name: "sensor2",
                        type: "transport",
                        location: {
                            lat: 1,
                            long: 1
                        },
                        temp: 0,
                        hum: 0,
                        light: 0
                    }
                ]
            }
        ]
    };

    fs.writeFileSync("db.json", JSON.stringify(db));
}
