import PropTypes from 'prop-types';
import { ImageGalleryLi, ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ props, getLargeImgUrl, toggleModal }) => {
  return (
    <>
      <ImageGalleryUl>
        {props.imgHits.map(item => (
          <ImageGalleryLi key={item.id}>
            <ImageGalleryItem
              item={item}
              getLargeImgUrl={getLargeImgUrl}
              toggleModal={toggleModal}
            />
          </ImageGalleryLi>
        ))}
      </ImageGalleryUl>
    </>
  );
};

ImageGallery.propTypes = {
  props: PropTypes.object,
  getLargeImgUrl: PropTypes.func,
  toggleModal: PropTypes.func,
};
