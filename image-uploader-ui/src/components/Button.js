import { useRef } from "react";
import styles from "./Button.module.css";

const UploadButton = ({ onImageSelection }) => {
  const inputRef = useRef(null);

  return (
    <>
      <input
        ref={inputRef}
        multiple={false}
        type="file"
        accept=".jpg, .jpeg, .png"
        hidden
        onChange={onImageSelection}
      />
      <button
        className={styles.button}
        onClick={() => inputRef.current?.click()}
      >
        Choose a file
      </button>
    </>
  );
};

export default UploadButton;
