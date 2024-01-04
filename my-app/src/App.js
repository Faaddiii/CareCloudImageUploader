import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './App.css';
import { uploadFile } from '@uploadcare/upload-client';

function App() {
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

  return (
    <div className="App">


      <div className='row'>
        <div className='col-6'>
          <h2>Upload & Preview</h2>
          <input type="file" onChange={handlePreviewFileChange} />
          <button
            className='btn btn-success mt-2'
            onClick={handlePreview}
            disabled={isPreviewUploading}
          >
            {isPreviewUploading ? 'Uploading...' : 'Transform image'}
          </button>
          {previewImageUrl && (
            <div>
              <p>Selected Image:</p>
              <img src={previewImageUrl} alt="Selected" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
        <div className='col-6'>
          {transformPreviewImageUrl && (
            <div>
              <p>Transformed Image:</p>
              <img src={transformPreviewImageUrl} alt="Transformed" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <h2>Upload & Resize</h2>
          <input type="file" onChange={handleResizeFileChange} />
          <button
            className='btn btn-success mt-2'
            onClick={handleResize}
            disabled={isResizeUploading}
          >
            {isResizeUploading ? 'Uploading...' : 'Transform image'}
          </button>
          {resizeImageUrl && (
            <div>
              <p>Selected Image:</p>
              <img src={resizeImageUrl} alt="Selected" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
        <div className='col-6'>
          {transformResizeImageUrl && (
            <div>
              <p>Transformed Image:</p>
              <img src={transformResizeImageUrl} alt="Transformed" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <h2>Upload &  Smart-Resize</h2>
          <input type="file" onChange={handleSmartResizeFileChange} />
          <button
            className='btn btn-success mt-2'
            onClick={handleSmartResize}
            disabled={isSmartResizeUploading}
          >
            {isSmartResizeUploading ? 'Uploading...' : 'Transform image'}
          </button>
          {smartResizeImageUrl && (
            <div>
              <p>Selected Image:</p>
              <img src={smartResizeImageUrl} alt="Selected" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
        <div className='col-6'>
          {transformSmarrtResizeImageUrl && (
            <div>
              <p>Transformed Image:</p>
              <img src={transformSmarrtResizeImageUrl} alt="Transformed" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <h2>Upload & Crop</h2>
          <input type="file" onChange={handleCropFileChange} />
          <button
            className='btn btn-success mt-2'
            onClick={handleCrop}
            disabled={isCropUploading}
          >
            {isCropUploading ? 'Uploading...' : 'Transform image'}
          </button>
          {cropImageUrl && (
            <div>
              <p>Selected Image:</p>
              <img src={cropImageUrl} alt="Selected" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
        <div className='col-6'>
          {transformCropImageUrl && (
            <div>
              <p>Transformed Image:</p>
              <img src={transformCropImageUrl} alt="Transformed" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      </div>


      <div className='row'>
        <div className='col-6'>
          <h2>Upload & Crop By Ratio</h2>
          <input type="file" onChange={handleCropByRatioFileChange} />
          <button
            className='btn btn-success mt-2'
            onClick={handleCropByRatio}
            disabled={isCropByRatioUploading}
          >
            {isCropByRatioUploading ? 'Uploading...' : 'Transform image'}
          </button>
          {cropByRatioImageUrl && (
            <div>
              <p>Selected Image:</p>
              <img src={cropByRatioImageUrl} alt="Selected" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
        <div className='col-6'>
          {transformCropByRatioImageUrl && (
            <div>
              <p>Transformed Image:</p>
              <img src={transformCropByRatioImageUrl} alt="Transformed" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <h2>Upload & Crop By Object</h2>
          <input type="file" onChange={handleCropByObjectFileChange} />
          <button
            className='btn btn-success mt-2'
            onClick={handleCropByObject}
            disabled={isCropByObjectUploading}
          >
            {isCropByObjectUploading ? 'Uploading...' : 'Transform image'}
          </button>
          {cropByObjectImageUrl && (
            <div>
              <p>Selected Image:</p>
              <img src={cropByObjectImageUrl} alt="Selected" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
        <div className='col-6'>
          {transformCropByObjectImageUrl && (
            <div>
              <p>Transformed Image:</p>
              <img src={transformCropByObjectImageUrl} alt="Transformed" style={{ maxWidth: '100%' }} />
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default App;
