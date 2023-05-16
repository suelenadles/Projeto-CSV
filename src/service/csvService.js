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
  }
}


export default csvService;
