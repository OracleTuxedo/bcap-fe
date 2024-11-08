import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

// Define the types for your state variables
interface IFileUploadState {
  files: FileList | null;
  fileDiv: string;
  fileDesc: string;
}

const FileUpload: React.FC = () => {
  const [state, setState] = useState<IFileUploadState>({
    files: null,
    fileDiv: '',
    fileDesc: ''
  });

  // Handle file input change
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setState(prevState => ({ ...prevState, files }));
  };

  // Handle form submit and file upload
  const handleFileUpload = async (e: FormEvent) => {
    e.preventDefault();

    if (!state.files) {
      alert('Please select at least one file!');
      return;
    }

    const formData = new FormData();
    for (let i = 0; i < state.files.length; i++) {
      formData.append('file', state.files[i]);
    }

    // Add additional form parameters
    formData.append('fileDiv', state.fileDiv);
    formData.append('fileDesc', state.fileDesc);

    try {
      const response = await axios.post('http://localhost:8080/file-manager/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload Success', response.data);
    } catch (error) {
      console.error('Upload Error:', error);
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
        }}
      >
        <h1 style={{ textAlign: 'center', color: '#333' }}>File Upload</h1>
        <form onSubmit={handleFileUpload}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="fileDiv" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              File Division:
            </label>
            <input
              type="text"
              id="fileDiv"
              value={state.fileDiv}
              onChange={(e) => setState({ ...state, fileDiv: e.target.value })}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="fileDesc" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              File Description:
            </label>
            <input
              type="text"
              id="fileDesc"
              value={state.fileDesc}
              onChange={(e) => setState({ ...state, fileDesc: e.target.value })}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="fileInput" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>
              Choose Files:
            </label>
            <input
              type="file"
              id="fileInput"
              multiple
              onChange={onFileChange}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Upload Files
          </button>
        </form>
      </div>
    );
};

export default FileUpload;



