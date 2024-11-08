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
    <div
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h1 style={{ color: '#333', marginBottom: '15px' }}>File Download</h1>
          <button
            onClick={handleFileDownload}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              color: '#fff',
              backgroundColor: '#007bff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
          >
            Download File
          </button>
        </div>
  );
};

export default FileDownload;
