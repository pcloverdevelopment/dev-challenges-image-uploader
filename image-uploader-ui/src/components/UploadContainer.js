import { useState } from "react";

import axios from "axios";

import Button from "./Button";
import DragAndDrop from "./DragAndDrop";
import ImageDisplayer from "./ImageDisplayer";
import styles from "./UploadContainer.module.css";

const UploadContainer = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // derived state for use below
  const hasUploadedImage = uploadedImage !== null;
  const shouldDisplayUploadControls = !isUploading && !hasUploadedImage;
  console.log(`isUploading: ${isUploading} && ${hasUploadedImage}}`);

  const onImageSelection = (e) => {
    setIsUploading(true);

    const image = e.target.files[0];

    // perform file upload
    const formData = new FormData();
    formData.append("file", image);
    axios
      .create({
        baseURL: "http://localhost:5156",
      })
      .post("/ImageUpload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          console.log(progressEvent.loaded);
          console.log(progressEvent.total);
          console.log(progressEvent.loaded / progressEvent.total);
        },
      })
      .then((response) => {
        console.log(response);
        setUploadedImage(image);
        setIsUploading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.headerText}>Upload your image</h1>
      <p className={styles.fileTypeText}>File should be JPG, JPEG, or PNG...</p>
      {hasUploadedImage && <ImageDisplayer uploadedImage={uploadedImage} />}
      {shouldDisplayUploadControls && (
        <>
          <DragAndDrop onImageSelection={onImageSelection} />
          <p className={styles.orText}>Or</p>
          <Button onImageSelection={onImageSelection} />
        </>
      )}
    </div>
  );
};

export default UploadContainer;
