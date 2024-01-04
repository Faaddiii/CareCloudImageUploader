// TransformedImage.js
import React from 'react';

function TransformedImage({ imageUrl }) {
  return (
    <div>
        <hr></hr>
      {imageUrl && (
        <div className="image-preview-container">
          <p>Transformed Image:</p>
          <img src={imageUrl} alt="Transformed" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default TransformedImage;
