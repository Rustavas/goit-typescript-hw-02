import ImageCard from "../imageCard/ImageCard"
import { Photos } from "../services/api"
// import { ModalData } from "../../App"
import { ImageData } from "../imageCard/ImageCard"

import css from "./ImageGallery.module.css"


interface ImageGalleryProps {
  photos: Photos[],
  onImageClick: (imageData: ImageData) => void,
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, onImageClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map(({ id, urls, alt_description, user, likes }) => {
        return < ImageCard
          key={id}
          urls={urls}
          alt_description={alt_description}
          user={user}
          likes={likes}
          onImageClick={onImageClick}
        />
      })
      }
    </ul>
  )
}

export default ImageGallery