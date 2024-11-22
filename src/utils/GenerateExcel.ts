import moment from 'moment';
import * as XLSX from 'xlsx';

const convertToExcel = (data: unknown[], screenName: string) => {
  const fileName = `${screenName}-${moment().format('YYYYMMDDHHmmss')}.xlsx`;
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create a new workbook and append the worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Write the workbook to an ArrayBuffer
  const excelArrayBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
    compression: true,
  });
  const excelBlob = new Blob([excelArrayBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });

  return {
    name: fileName,
    data: excelBlob,
  };
};

const exportToExcel = (data: unknown[], screenName: string) => {
  const excelOutput = convertToExcel(data, screenName);

  // Create a URL for the Blob and trigger the download
  const url = URL.createObjectURL(excelOutput.data);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', excelOutput.name);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Revoke the object URL to free memory
  URL.revokeObjectURL(url);
};

export { exportToExcel };
