import csvService from "../service/csvService.js";

const csvController = {
  getParsedCsvData: async (req, res) => {        
      try {
        const parsedCsv = await csvService.getReadCsvData();
        res.status(200).json(parsedCsv);
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
  }

export default csvController;