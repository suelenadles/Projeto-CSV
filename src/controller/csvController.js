import path from "path";
import csvTransformService from "../service/csvTransformService.js";
import csvService from "../service/csvService.js";

const csvController = {
  getParsedCsvData: async (req, res) => {
    try {
      const csvName = req.params.csvName;
      const csvPath = path.join('./data', `${csvName}.csv`);
      const { csvData, columnNames } = await csvService.getReadCsvFile(csvPath);
      const transformedData = csvTransformService.transformCsvData(columnNames, csvData);
      res.status(200).json(transformedData);
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  getCreateCsvData: async (req, res) => {
    try {
      const data = req.body;
      await csvService.getWriteCsvData(data);
      res.status(200).send('Dados gravados com sucesso!');
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  };

export default csvController;
