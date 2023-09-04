import PropTypes from 'prop-types';
import { ImageGalleryItemIMG } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
  getLargeImgUrl,
  toggleModal,
}) => {
  return (
    <>
      <ImageGalleryItemIMG
        src={webformatURL}
        alt={tags}
        loading="lazy"
        onClick={() => {
          getLargeImgUrl(largeImageURL);
          toggleModal();
        }}
      />
    </>
  );
};

ImageGalleryItem.propType = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      tags: PropTypes.string,
    })
  ),
  getLargeImgUrl: PropTypes.func,
  toggleModal: PropTypes.func,
};
