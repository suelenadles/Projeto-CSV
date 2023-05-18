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
  getWriteCsvData: async (data) => {
      const csvHeaders = Object.keys(data);
      const csvValues = csvHeaders.map(header => {
         const value = data[header];
        return value !== undefined && value !== null ? value : "";
      });
      const csvData = `${csvValues.join(';')}\n`;
      const csvPath = './data/dados.csv';
      await fs.appendFileSync(csvPath, csvData);
},
}


export default csvService;
