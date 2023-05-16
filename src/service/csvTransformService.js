const csvTransformService = {
  transformCsvData: (columnNames, csvData) => {
  const transformedData = csvData.map(line => {
    const obj = {};
    columnNames.forEach((columnName, csvData) => {
      obj[columnName] = line[csvData]
          .replace(/[^\w\s]/gi, '')
          .replace(/_/gi, '')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');
    });
    return obj;
  });
  return transformedData;
}
}

export default csvTransformService;