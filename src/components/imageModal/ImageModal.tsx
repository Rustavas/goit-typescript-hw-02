import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  closeModal: () => void;
  modalIsOpen: boolean;
  imageSrc: string;
  imageAltDescription: string;
  imageAuthor: string;
  imageLikes: number;
}

const ImageModal: React.FC<ImageModalProps> = ({
  closeModal,
  modalIsOpen,
  imageSrc = "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
  imageAltDescription = "Regular gallery image",
  imageAuthor = "Unknown",
  imageLikes = "0",
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={css.Modal}
      overlayClassName={css.Overlay}
    >
      {" "}
      <div className={css.modalContainer}>
        <div className={css.imageContainer}>
          <img className={css.image} src={imageSrc} alt={imageAltDescription} />
        </div>
        <div className={css.imageInfo}>
          <p className={css.imageDescr}>
            Author: <span className={css.imageSpan}>{imageAuthor}</span>
          </p>
          <p className={css.imageDescr}>
            Likes: <span className={css.imageSpan}>{imageLikes}</span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;