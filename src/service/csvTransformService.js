const csvTransformService = {
    transformCsvData: (columnNames, csvData) => {
      const transformedData = csvData.map(
        treatment => {
        const obj = {};
        for (let i = 0; i < columnNames.length; i++) {
          let csvDataValue = 
          treatment[i];
        csvDataValue = csvDataValue.replace(/[^\w\s]/gi, '').replace(/_/gi, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          obj[columnNames[i]] = csvDataValue;
        }
        return obj;
      });
      return transformedData;
    }
  }

  export default csvTransformService;