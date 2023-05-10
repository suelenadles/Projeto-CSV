import { createReadStream } from 'fs';
import { createInterface } from 'readline';

const csvService = {
  getReadCsvData: async () => {
    const csvData = [];
    const csvFileReader = createInterface({
      input: createReadStream('./data/dados.csv'),
    });    
    for await (const line of csvFileReader) {
      let columnValues = line.split(';');
      for (const fileLine of columnValues) {
        csvData.push(fileLine);
      }
    }
    return csvData;
  },
};

export default csvService;
