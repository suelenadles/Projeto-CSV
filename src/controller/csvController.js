import path from "path";
import csvTransformService from "../service/csvTransformService.js";
import csvService from "../service/csvService.js";

const csvController = {
  getParsedCsvData: async (req, res) => {
    try {
      const csvName = req.params.csvName;

      const csvPath = path.join('./data', `${csvName}.csv`);

      const readerResult = await csvService.getReadCsvFile(csvPath);
      const csvData = readerResult.csvData;
      const columnNames = readerResult.columnNames;

      res.status(200).json(csvTransformService.transformCsvData(columnNames, csvData));
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
};

export default csvController;
