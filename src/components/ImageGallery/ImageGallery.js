import { ImageGalleryLi, ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ props }) => {
  return (
    <>
      <ImageGalleryUl>
        {props.imgHits.map(item => (
          <ImageGalleryLi key={item.id}>
            <ImageGalleryItem item={item} />
          </ImageGalleryLi>
        ))}
      </ImageGalleryUl>
    </>
  );
};
