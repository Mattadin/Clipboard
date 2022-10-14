const express = require('express');
const { parse } = require('csv-parse');
const fs = require('fs');
const app = express();

app.use(express.json());

const parser = parse({columns: true}, (err, values) => {
    console.table(values);

    let newCSV = fs.createWriteStream('output.csv');

    let output = JSON.stringify(values);

    newCSV.write(output);

});

fs.createReadStream(__dirname+'/input.csv').pipe(parser);

app.listen(3000, () => console.log("Server up and running!"));