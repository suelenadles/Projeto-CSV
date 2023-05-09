import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const csvService = {
  getReadCsvData: async () => {
    const csvData = [];
    const readCsvFile = createInterface({
      input: createReadStream('./data/dados.csv'),
    });    
    for await (const line of readCsvFile) {
      let csvLine = line.split(';');
      for (const fileLine of csvLine) {
        csvData.push(fileLine);
      }
    }
    return csvData;
  },
};

export default csvService;
