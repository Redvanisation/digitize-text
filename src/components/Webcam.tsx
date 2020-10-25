import React, { useState, useCallback } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';




const Webcam = (): JSX.Element => {
  const [imageUri, setImageUri] = useState<string>('');

  const handleTakePhoto = useCallback((dataUri: any) => {
    // Do stuff with the photo...
    console.log('takePhoto');
    setImageUri(dataUri);
  }, []);

  return (
    <>
    <Camera
      onTakePhoto = {(dataUri) => handleTakePhoto(dataUri)}
      idealFacingMode = {FACING_MODES.ENVIRONMENT}
      isImageMirror={false}
      imageType={IMAGE_TYPES.JPG}
      imageCompression={0.5}
    />
    {/* <img src={imageUri} alt=""/> */}
    </>
  );
};

export default Webcam;
