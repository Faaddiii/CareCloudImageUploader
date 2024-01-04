import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import { uploadFile } from '@uploadcare/upload-client';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import Sidebar from './Sidebar';

function App() {
  const [selectedComponent, setSelectedComponent] = useState(0);
  const [fileData, setFileData] = useState(null);


  const [previewImageUrl, setPreviewImageUrl] = useState(null);
  const [transformPreviewImageUrl, setTransformPreviewImageUrl] = useState(null);

  const [resizeImageUrl, setResizeImageUrl] = useState(null);
  const [transformResizeImageUrl, setTransformResizeImageUrl] = useState(null);

  const [smartResizeImageUrl, setSmartResizeImageUrl] = useState(null);
  const [transformSmarrtResizeImageUrl, setTransformSmarrtResizeImageUrl] = useState(null);

  const [cropImageUrl, setCropImageUrl] = useState(null);
  const [transformCropImageUrl, setTransformCropImageUrl] = useState(null);

  const [cropByRatioImageUrl, setCropByRatioImageUrl] = useState(null);
  const [transformCropByRatioImageUrl, setTransformCropByRatioImageUrl] = useState(null);

  const [cropByObjectImageUrl, setCropByObjectImageUrl] = useState(null);
  const [transformCropByObjectImageUrl, setTransformCropByObjectImageUrl] = useState(null);


  const [isPreviewUploading, setIsPreviewUploading] = useState(false);
  const [isResizeUploading, setIsResizeUploading] = useState(false);
  const [isSmartResizeUploading, setIsSmartResizeUploading] = useState(false);
  const [isCropUploading, setIsCropUploading] = useState(false);
  const [isCropByRatioUploading, setIsCropByRatioUploading] = useState(false);
  const [isCropByObjectUploading, setIsCropByObjectUploading] = useState(false);


  const handleCropByObjectFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCropByObjectImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCropByObjectImageUrl(null);
    }
  };

  const handleCropByRatioFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCropByRatioImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCropByRatioImageUrl(null);
    }
  };

  const handleCropFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCropImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCropImageUrl(null);
    }
  };

  // Handle file input change
  const handlePreviewFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImageUrl(null);
    }
  };

  const handleResizeFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setResizeImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setResizeImageUrl(null);
    }
  };

  const handleSmartResizeFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSmartResizeImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSmartResizeImageUrl(null);
    }
  };

  // Handle file upload and preview
  const handlePreview = async () => {
    if (fileData) {
      try {
        setIsPreviewUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });

        const transformedUrl = `${result.cdnUrl}/-/preview/934x550/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        setTransformPreviewImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsPreviewUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  // Handle file upload and preview
  const handleResize = async () => {
    if (fileData) {
      try {
        setIsResizeUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });

        const transformedUrl = `${result.cdnUrl}/-/scale_crop/300x300/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        setTransformResizeImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsResizeUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleSmartResize = async () => {
    if (fileData) {
      try {
        setIsSmartResizeUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });

        const transformedUrl = `${result.cdnUrl}/-/scale_crop/350x350/smart/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        setTransformSmarrtResizeImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsSmartResizeUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  // Handle file upload and crop
  const handleCrop = async () => {
    if (fileData) {
      try {
        setIsCropUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/crop/520x340/center/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        setTransformCropImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsCropUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  // Handle file upload and crop
  const handleCropByRatio = async () => {
    if (fileData) {
      try {
        setIsCropByRatioUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/crop/640x424/2560,830/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        setTransformCropByRatioImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsCropByRatioUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  // Handle file upload and crop
  const handleCropByObject = async () => {
    if (fileData) {
      try {
        setIsCropByObjectUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/crop/face/1:1/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        setTransformCropByObjectImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsCropByObjectUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const callExternalAPI = async (apiUrl) => {
    try {
      const response = await fetch(apiUrl);
      return response;
    } catch (error) {
      console.error('Error calling API:', error);
    }
  };

  // ... (existing state declarations and functions)

  const handleSelectComponent = (index) => {
    setSelectedComponent(index);
  };
  const getCurrentComponent = () => {
    switch (selectedComponent) {
      case 0:
        return (
          <>
            <ImageUpload
              label="Upload & Preview"
              onChange={handlePreviewFileChange}
              imageUrl={previewImageUrl}
              onTransform={handlePreview}
              isUploading={isPreviewUploading}
            />
            <ImagePreview imageUrl={transformPreviewImageUrl} />
          </>
        );
      case 1:
        return (
          <>
            <ImageUpload
              label="Upload & Resize"
              onChange={handleResizeFileChange}
              imageUrl={resizeImageUrl}
              onTransform={handleResize}
              isUploading={isResizeUploading}
            />
            <ImagePreview imageUrl={transformResizeImageUrl} />
          </>
        );
      case 2:
        return (
          <>
            <ImageUpload
              label="Upload & Smart-Resize"
              onChange={handleSmartResizeFileChange}
              imageUrl={smartResizeImageUrl}
              onTransform={handleSmartResize}
              isUploading={isSmartResizeUploading}
            />
            <ImagePreview imageUrl={transformSmarrtResizeImageUrl} />
          </>
        );
      case 3:
        // Add case for 'Upload & Crop'
        return (
          <>
            <ImageUpload
              label="Upload & Crop"
              onChange={handleCropFileChange}
              imageUrl={cropImageUrl}
              onTransform={handleCrop}
              isUploading={isCropUploading}
            />
            <ImagePreview imageUrl={transformCropImageUrl} />
          </>
        );
      case 4:
        // Add case for 'Upload & Crop By Ratio'
        return (
          <>
            <ImageUpload
              label="Upload & Crop By Ratio"
              onChange={handleCropByRatioFileChange}
              imageUrl={cropByRatioImageUrl}
              onTransform={handleCropByRatio}
              isUploading={isCropByRatioUploading}
            />
            <ImagePreview imageUrl={transformCropByRatioImageUrl} />
          </>
        );
      case 5:
        // Add case for 'Upload & Crop By Object'
        return (
          <>

            <ImageUpload
              label="Upload & Crop By Object"
              onChange={handleCropByObjectFileChange}
              imageUrl={cropByObjectImageUrl}
              onTransform={handleCropByObject}
              isUploading={isCropByObjectUploading}
            />

            <ImagePreview imageUrl={transformCropByObjectImageUrl} />
          </>
        );
      default:
        return null;
    }
  };


  return (
    <div className="App">
      <div className="row">
        <div className="col-3">
          <Sidebar onSelectComponent={handleSelectComponent} selectedComponent={selectedComponent} />
        </div>
        <div className="col-9">
          <h1>CareCloud Image Transformer</h1>
          <p>Uploadcare makes simple, powerful, developer-friendly building blocks to handle file uploading, storage, processing, and delivery. You get a complete file handling infrastructure.</p>
          {getCurrentComponent()}
        </div>
      </div>

      {/* ... (remaining code) */}
    </div>
  );
}

export default App;
