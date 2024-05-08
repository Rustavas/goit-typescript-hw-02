// import { ModalData } from "../../App";
import css from "./ImageCard.module.css"

interface ImageCardProps {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  onImageClick: (imageData: ImageData) => void;
  user: {
    name: string;
  };
  likes: number;
}
export interface ImageData {
  imageSrc: string;
  imageAltDescription: string;
  imageDescription?: string;
  imageAuthor: string;
  imageLikes: number;
}
const ImageCard: React.FC<ImageCardProps> = ({ urls, alt_description, onImageClick, user, likes }) => {
  const imageData:  ImageData= {
    imageSrc: urls.regular,
    imageAltDescription: alt_description,
    imageAuthor: user.name,
    imageLikes: likes,
  };
  return (
    <li className={css.ImageCard}>
      <div>
        <img src={urls.small} alt={alt_description}
          onClick={() => onImageClick(imageData)} />
      </div>
    </li>
  )
}

export default ImageCard