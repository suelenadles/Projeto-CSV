import fs from "fs";
import { createReadStream } from "fs";
import { createInterface } from "readline";

const csvService = {
  getReadCsvFile: async (filePath) => {
    const csvData = [];
    const csvFileReader = createInterface({
      input: createReadStream(filePath),
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





  getWriteCsvData: ({
    Nome,
    Profissão,
    CPF,
    Endereço_de_trabalho,
    CNPJ,
    Endereço_comercial,
    Email_Able,
    Nome_da_Empresa,
    Conta_corrente,
    Data_de_contratação,
    Valor_do_contrato,
    LGPD,
    Prestação_de_Serviços,
    NDA,
  }) => {
    const csvData = `${Nome};${Profissão};${CPF};${Endereço_de_trabalho}; ${CNPJ}; ${Endereço_comercial}; ${Email_Able}; ${Nome_da_Empresa}; ${Conta_corrente}; ${Data_de_contratação}; ${Valor_do_contrato}; ${LGPD}; ${Prestação_de_Serviços}; ${NDA}\n`;
    const filePath = "./data/dados.csv";
    fs.appendFileSync(filePath, csvData);
  };

export default csvService;
