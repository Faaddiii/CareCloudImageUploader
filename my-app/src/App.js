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

  const [scaleCropImageUrl, setScaleCropImageUrl] = useState(null);
  const [transformScaleCropImageUrl, setTransformScaleCropImageUrl] = useState(null);

  const [smartCropImageUrl, setSmartCropImageUrl] = useState(null);
  const [transformSmartCropImageUrl, setTransformSmartCropImageUrl] = useState(null);

  const [circleCropImageUrl, setCircleCropImageUrl] = useState(null);
  const [transformCircleCropImageUrl, setTransformCircleCropImageUrl] = useState(null);

  const [fillColorImageUrl, setFillColorImageUrl] = useState(null);
  const [transformFillColorImageUrl, setTransformFillColorImageUrl] = useState(null);

  const [zoomObjectImageUrl, setZoomObjectImageUrl] = useState(null);
  const [transformZoomObjectImageUrl, setTransformZoomObjectImageUrl] = useState(null);

  const [autoRotationImageUrl, setAutoRotationImageUrl] = useState(null);
  const [transformAutoRotationImageUrl, setTransformAutoRotationImageUrl] = useState(null);

  const [manualRotationImageUrl, setManualRotationImageUrl] = useState(null);
  const [transformManualRotationImageUrl, setTransformManualRotationImageUrl] = useState(null);

  const [flipImageUrl, setFlipImageUrl] = useState(null);
  const [transformFlipImageUrl, setTransformFlipImageUrl] = useState(null);

  const [mirrorImageUrl, setMirrorImageUrl] = useState(null);
  const [transformMirrorImageUrl, setTransformMirrorImageUrl] = useState(null);


  const [isPreviewUploading, setIsPreviewUploading] = useState(false);
  const [isResizeUploading, setIsResizeUploading] = useState(false);
  const [isSmartResizeUploading, setIsSmartResizeUploading] = useState(false);
  const [isCropUploading, setIsCropUploading] = useState(false);
  const [isCropByRatioUploading, setIsCropByRatioUploading] = useState(false);
  const [isCropByObjectUploading, setIsCropByObjectUploading] = useState(false);
  const [isScaleCropUploading, setIsScaleCropUploading] = useState(false);
  const [isSmartCropUploading, setIsSmartCropUploading] = useState(false);
  const [isCircleCropUploading, setIsCircleCropUploading] = useState(false);
  const [isFillColorUploading, setIsFillColorUploading] = useState(false);
  const [isZoomObjectUploading, setIsZoomObjectUploading] = useState(false);
  const [isAutoRotationUploading, setIsAutoRotationUploading] = useState(false);
  const [isManualRotationUploading, setIsManualRotationUploading] = useState(false);
  const [isFlipUploading, setIsFlipUploading] = useState(false);
  const [isMirrorUploading, setIsMirrorUploading] = useState(false);


  const handleMirrorFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMirrorImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setMirrorImageUrl(null);
    }
  };

  const handleFlipFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFlipImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFlipImageUrl(null);
    }
  };

  const handleManualRotationFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setManualRotationImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setManualRotationImageUrl(null);
    }
  };

  const handleAutoRotationFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAutoRotationImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setAutoRotationImageUrl(null);
    }
  };

  const handleZoomObjectFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setZoomObjectImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setZoomObjectImageUrl(null);
    }
  };

  const handleFillColorFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFillColorImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFillColorImageUrl(null);
    }
  };

  const handleCircleCropFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCircleCropImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setCircleCropImageUrl(null);
    }
  };

  const handleSmartCropFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSmartCropImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSmartCropImageUrl(null);
    }
  };

  const handleScaleCropFileChange = (event) => {
    const file = event.target.files[0];

    setFileData(file);

    // Display the selected image
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setScaleCropImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setScaleCropImageUrl(null);
    }
  };

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

  const handleScaleCrop = async () => {
    if (fileData) {
      try {
        setIsScaleCropUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/scale_crop/440x440/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        setTransformScaleCropImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsScaleCropUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleSmartCrop = async () => {
    if (fileData) {
      try {
        setIsSmartCropUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/scale_crop/440x440/smart/80%25,80%25/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        setTransformSmartCropImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsSmartCropUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleCircleCrop = async () => {
    if (fileData) {
      try {
        setIsCircleCropUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/border_radius/10,100/50%/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        console.log(response)
        setTransformCircleCropImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsCircleCropUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleFillColor = async () => {
    if (fileData) {
      try {
        setIsFillColorUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/setfill/99ff99/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        console.log(response)
        setTransformFillColorImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsFillColorUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleZoomObject = async () => {
    if (fileData) {
      try {
        setIsZoomObjectUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}-/preview/-/zoom_objects/50/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        console.log(response)
        setTransformZoomObjectImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsZoomObjectUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleAutoRotation = async () => {
    if (fileData) {
      try {
        setIsAutoRotationUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/autorotate/yes/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        console.log(response)
        setTransformAutoRotationImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsAutoRotationUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleManualRotation = async () => {
    if (fileData) {
      try {
        setIsManualRotationUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/rotate/90/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        console.log(response)
        setTransformManualRotationImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsManualRotationUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleFlip = async () => {
    if (fileData) {
      try {
        setIsFlipUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/flip/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        console.log(response)
        setTransformFlipImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsFlipUploading(false);
      }
    } else {
      console.error('No file selected');
    }
  };

  const handleMirror = async () => {
    if (fileData) {
      try {
        setIsMirrorUploading(true);
        const result = await uploadFile(fileData, {
          publicKey: 'd8889db58a8a9a64255e',
          store: 'auto',
          metadata: {
            subsystem: 'js-client',
            pet: 'cat'
          }
        });
        const transformedUrl = `${result.cdnUrl}/-/mirror/`;
        // Call the external API with the transformed URL
        const response = await callExternalAPI(transformedUrl);
        console.log(response)
        setTransformMirrorImageUrl(response.url);
      } catch (error) {
        console.error('Error uploading file:', error);
      } finally {
        setIsMirrorUploading(false);
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
      case 6:
        // Add case for 'Upload & Scale Crop'
        return (
          <>

            <ImageUpload
              label="Upload & Scale crop"
              onChange={handleScaleCropFileChange}
              imageUrl={scaleCropImageUrl}
              onTransform={handleScaleCrop}
              isUploading={isScaleCropUploading}
            />

            <ImagePreview imageUrl={transformScaleCropImageUrl} />
          </>
        );
      case 7:
        // Add case for 'Upload & Scale Crop'
        return (
          <>

            <ImageUpload
              label="Upload & Smart crop"
              onChange={handleSmartCropFileChange}
              imageUrl={smartCropImageUrl}
              onTransform={handleSmartCrop}
              isUploading={isSmartCropUploading}
            />

            <ImagePreview imageUrl={transformSmartCropImageUrl} />
          </>
        );
      case 8:
        // Add case for 'Upload & Scale Crop'
        return (
          <>

            <ImageUpload
              label="Upload & Border radius and circle crop"
              onChange={handleCircleCropFileChange}
              imageUrl={circleCropImageUrl}
              onTransform={handleCircleCrop}
              isUploading={isCircleCropUploading}
            />

            <ImagePreview imageUrl={transformCircleCropImageUrl} />
          </>
        );
      case 9:
        // Add case for 'Set fill color when croping and stretching'
        return (
          <>

            <ImageUpload
              label="Upload & Set fill color when croping and stretching"
              onChange={handleFillColorFileChange}
              imageUrl={fillColorImageUrl}
              onTransform={handleFillColor}
              isUploading={isFillColorUploading}
            />

            <ImagePreview imageUrl={transformFillColorImageUrl} />
          </>
        );
      case 10:
        // Add case for 'Set fill color when croping and stretching'
        return (
          <>

            <ImageUpload
              label="Upload & Zoom objects"
              onChange={handleZoomObjectFileChange}
              imageUrl={zoomObjectImageUrl}
              onTransform={handleZoomObject}
              isUploading={isZoomObjectUploading}
            />

            <ImagePreview imageUrl={transformZoomObjectImageUrl} />
          </>
        );
      case 11:
        return (
          <>

            <ImageUpload
              label="Upload & Automatic rotation"
              onChange={handleAutoRotationFileChange}
              imageUrl={autoRotationImageUrl}
              onTransform={handleAutoRotation}
              isUploading={isAutoRotationUploading}
            />

            <ImagePreview imageUrl={transformAutoRotationImageUrl} />
          </>
        );
      case 12:
        return (
          <>

            <ImageUpload
              label="Upload & Manual rotation"
              onChange={handleManualRotationFileChange}
              imageUrl={manualRotationImageUrl}
              onTransform={handleManualRotation}
              isUploading={isManualRotationUploading}
            />

            <ImagePreview imageUrl={transformManualRotationImageUrl} />
          </>
        );
      case 13:
        return (
          <>

            <ImageUpload
              label="Upload & Flip"
              onChange={handleFlipFileChange}
              imageUrl={flipImageUrl}
              onTransform={handleFlip}
              isUploading={isFlipUploading}
            />

            <ImagePreview imageUrl={transformFlipImageUrl} />
          </>
        );
      case 14:
        return (
          <>

            <ImageUpload
              label="Upload & Mirror"
              onChange={handleMirrorFileChange}
              imageUrl={mirrorImageUrl}
              onTransform={handleMirror}
              isUploading={isMirrorUploading}
            />

            <ImagePreview imageUrl={transformMirrorImageUrl} />
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
          <div className="row">
            <h1>CareCloud Image Transformer</h1>
            <p>Uploadcare makes simple, powerful, developer-friendly building blocks to handle file uploading, storage, processing, and delivery. You get a complete file handling infrastructure.</p>
            {getCurrentComponent()}
          </div>
        </div>
      </div>

      {/* ... (remaining code) */}
    </div>
  );
}

export default App;
