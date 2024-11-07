import React from 'react';
import axios from 'axios';

interface IFileDownloadParams {
  fileDiv: string;
  attachFileId: string;
  attachFileSeqNo: string;
}

const FileDownload: React.FC = () => {
  const handleFileDownload = async () => {
    const params: IFileDownloadParams = {
      fileDiv: 'test',        // Set your file division here
      attachFileId: '1',      // Set file ID here
      attachFileSeqNo: '1',   // Set file sequence number here
    };

    try {
      const response = await axios.get('http://localhost:8080/file-manager/download', {
        params,
        responseType: 'blob',  // Important to handle the binary data properly
      });

      const fileBlob = response.data;
      const fileURL = window.URL.createObjectURL(new Blob([fileBlob]));
      const link = document.createElement('a');
      link.href = fileURL;
      link.setAttribute('download', 'file.jpg'); // Set the default filename
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Download Error:', error);
    }
  };

  return (
    <div>
      <h1>File Download</h1>
      <button onClick={handleFileDownload}>Download File</button>
    </div>
  );
};

export default FileDownload;
