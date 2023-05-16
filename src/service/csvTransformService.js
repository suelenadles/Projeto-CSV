const csvTransformService = {
    transformCsvData: (columnNames, csvData) => {
      const transformedData = csvData.map(columnValues => {
        const obj = {};
        for (let i = 0; i < columnNames.length; i++) {
          obj[columnNames[i]] = encodeURIComponent(columnValues[i]);
        }
        return obj;
      });
      return transformedData;
    }
  }

  export default csvTransformService;