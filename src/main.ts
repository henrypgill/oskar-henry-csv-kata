import fs from "fs";
// import csv from "csv";
// import csv from "fast-csv";

const inputFile = "./src/jokes.txt";
// const outputFile = './output.csv'

fs.readFile(inputFile, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const splitRegex = /\n{2,}/g;
    const arrOfStrings = data.split(splitRegex);

    const arrOfArrays = arrOfStrings.map((joke) => [joke]);

    console.log(arrOfArrays);

    // const csvStream = csv.format({ headers: true });
    // csvStream.pipe(process.stdout).on("end", () => process.exit());

    // for (const joke of arrOfStrings) {
    //     csvStream.write({ header1: joke });
    // }
    // csvStream.end();
});
