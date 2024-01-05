// ImagePreview.js
import React from 'react';

function ImagePreview({ imageUrl }) {
  return (
    <div className='col-6'> 
      {imageUrl && (
        <div className="image-preview-container">
          <p className="preview-label">Transformed Image</p>
          <img src={imageUrl} alt="Transformed" className="preview-image" />
        </div>
      )}
    </div>
  );
}

export default ImagePreview;
