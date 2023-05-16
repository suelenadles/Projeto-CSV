const csvTransformService = {
  transformCsvData: (columnNames, csvData) => {
  const transformedData = csvData.map(line => {
    const obj = {};
    columnNames.forEach((columnName, csvData) => {
      obj[columnName] = line[csvData]
          .replace(/[^\w\s]/gi, '')
    });
    return obj;
  });
  return transformedData;
}
}

export default csvTransformService;