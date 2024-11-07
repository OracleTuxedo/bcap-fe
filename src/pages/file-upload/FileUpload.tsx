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
      formData.append('files', state.files[i]);
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
    <div>
      <h1>File Upload</h1>
      <form onSubmit={handleFileUpload}>
        <div>
          <label htmlFor="fileDiv">File Division:</label>
          <input
            type="text"
            id="fileDiv"
            value={state.fileDiv}
            onChange={(e) => setState({ ...state, fileDiv: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="fileDesc">File Description:</label>
          <input
            type="text"
            id="fileDesc"
            value={state.fileDesc}
            onChange={(e) => setState({ ...state, fileDesc: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="fileInput">Choose Files:</label>
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={onFileChange}
          />
        </div>
        <button type="submit">Upload Files</button>
      </form>
    </div>
  );
};

export default FileUpload;
