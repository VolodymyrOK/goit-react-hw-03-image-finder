import {
  ImageGalleryItemIMG,
  ImageGalleryItemLink,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
}) => {
  return (
    <>
      <ImageGalleryItemLink href={largeImageURL}>
        <ImageGalleryItemIMG src={webformatURL} alt={tags} loading="lazy" />
      </ImageGalleryItemLink>
    </>
  );
};
