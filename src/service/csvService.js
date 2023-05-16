import fs from "fs";
import { createReadStream } from "fs";
import { createInterface } from "readline";

const csvService = {
  getReadCsvFile: async (csvPath) => {
    const csvData = [];
    const csvFileReader = createInterface({
      input: createReadStream(csvPath),
    });
    let firstLineRead = false;
    let columnNames = [];
    csvFileReader.on("line", (line) => {
      if (!firstLineRead) {
        columnNames = line.split(";");
        firstLineRead = true;
      } else {
        const columnValues = line.split(";");
        csvData.push(columnValues);
      }
    });
    return new Promise((resolve, reject) => {
      csvFileReader.on("close", () => {
        resolve({ columnNames, csvData });
      });

      csvFileReader.on("error", (err) => {
        reject(err);
      });
    });
  },
  getWriteCsvData: (data) => {
    const headers = Object.keys(data);
    const values = headers.map(header => data[header] || '');
    const csvData = `${values.join(';')}\n`;
    const csvPath = './data/dados.csv';
    fs.appendFileSync(csvPath, csvData);
  }
  ,
};


export default csvService;
