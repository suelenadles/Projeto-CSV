import csvService from "../service/csvService.js";

const csvController = {
    getCsvData: async (req, res) => {        
      try {
        const csvData = await csvService.getReadCsvData();
        res.status(200).json(csvData);
      } catch (error) {
        res.status(400).send(error.message);
      }
    }
  }

export default csvController;