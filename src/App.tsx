import { useEffect, useState } from 'react'
import SearchBar from "./components/searchBar/SearchBar"
import { Toaster } from 'react-hot-toast';

import requestPhotosByQuery from './components/services/api';
import Loader from './components/loader/Loader';
import ErrorMessage from './components/errorMessage/ErrorMessage';
import ImageGallery from './components/imageGallery/ImageGallery';
import LoadMoreBtn from './components/loadMoreBtn/LoadMoreBtn';
import ImageModal from './components/imageModal/ImageModal';
import { Photos } from "./components/services/api"
import { ImageData } from "./components/imageCard/ImageCard"

import './App.css'

function App() {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ImageData>({
    imageSrc: "",
    imageAltDescription: "",
    imageDescription: "",
    imageAuthor: "",
    imageLikes: 0,
  })

  const handleSubmit = (value: string): void => {
    setPhotos([])
    setPage(1)
    setTotal(0)
    setQuery(value.trim())
    setIsError(false)

  }

  useEffect(() => {
    if (!query.length) return;
    async function fetchPhotosByQuery(query: string, page: number): Promise<void> {
      try {
        setIsloading(true)
        const { results, total, total_pages} = await requestPhotosByQuery(query, page)
        setTotal(total);
        setPhotos([...photos, ...results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsloading(false);
      }
    }
    fetchPhotosByQuery(query, page)
  }, [query, page])

  const onLoadMore = () => {
    setPage(page + 1)
  }
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleImageClick = (imageData: ImageData) => {
    setModalData(imageData);
    openModal();
  };
  return (
    <>
      <SearchBar
        onSubmit={handleSubmit}
      />
      <Toaster position="top-right" />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {photos && <ImageGallery photos={photos} onImageClick={handleImageClick} />}
      {photos.length > 0 && photos.length < total && <LoadMoreBtn onClick=
        {onLoadMore}>View more</LoadMoreBtn>}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        {...modalData}
      />
    </>
  )
}

export default App
