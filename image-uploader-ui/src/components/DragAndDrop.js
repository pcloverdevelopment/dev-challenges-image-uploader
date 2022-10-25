import styles from "./DragAndDrop.module.css";

const DragAndDrop = ({ onImageSelection }) => {
  const handleOnDragOver = (event) => {
    // Prevent default behavior (Prevent file from being opened in new tab)
    event.preventDefault();
  };

  const handleOnDrop = (event) => {
    // Prevent default behavior (Prevent file from being opened in new tab)
    event.preventDefault();

    onImageSelection(event);
  };

  return (
    <div
      className={styles.dropZone}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      <p className={styles.dragAndDropText}>Drag &amp; Drop your image here</p>
    </div>
  );
};

export default DragAndDrop;
