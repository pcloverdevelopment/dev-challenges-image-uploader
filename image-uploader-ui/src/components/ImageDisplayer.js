const ImageDisplayer = ({ uploadedImage }) => {
  return (
    <img
      alt={`Your uploaded ${uploadedImage.name}}`}
      src={URL.createObjectURL(uploadedImage)}
      style={{ maxWidth: "338px", borderRadius: "12px" }}
    />
  );
};

export default ImageDisplayer;
