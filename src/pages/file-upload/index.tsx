import React from 'react';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';
import { Button, Container, Seo, Text } from '@/components';

const FilePage = () => {

return (
        <Container>
          <FileUpload/>
          <FileDownload/>
        </Container>
    );
};

export default FilePage;
