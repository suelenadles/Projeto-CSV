import csvTransformService from "../service/csvTransformService.js";
import csvService from "../service/csvService.js";

const csvController = {
  getParsedCsvData: async (req, res) => {
    try {
    const filePath = './data/dados.csv';
    const readerResult = await csvService.getReadCsvFile(filePath);
    const csvData = readerResult.csvData;
    const columnNames = readerResult.columnNames;
    res.status(200).json(csvTransformService.transformCsvData(columnNames, csvData));
    } catch (error) {
      res.status(400).send(error.message);
    }
  },





  
  getCreateCsvData: async (req, res) => {
    try {
      const { Nome, Profissão, CPF, Endereço_de_trabalho, CNPJ, Endereço_comercial, Email_Able, Nome_da_Empresa, Conta_corrente, Data_de_contratação, Valor_do_contrato, LGPD, Prestação_de_Serviços, NDA } = req.body;
      csvService.getWriteCsvData({ Nome, Profissão, CPF, Endereço_de_trabalho, CNPJ, Endereço_comercial, Email_Able, Nome_da_Empresa, Conta_corrente, Data_de_contratação, Valor_do_contrato, LGPD, Prestação_de_Serviços, NDA });
      res.status(200).send("Dados gravados com sucesso!");
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
};

export default csvController;
