
import React from 'react';

function ImageUpload({ label, onChange, imageUrl, onTransform, isUploading }) {
  return (
    <div className='col-6'> 
      <h2>{label}</h2>
      <input type="file" onChange={onChange} />
      <button className="btn btn-outline-primary mt-2" onClick={onTransform} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Transform image'}
      </button>
      {imageUrl && (
         <div className="image-upload-container">
          <img src={imageUrl} alt="Selected" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
