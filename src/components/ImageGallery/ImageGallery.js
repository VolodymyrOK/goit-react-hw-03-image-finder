import { nanoid } from 'nanoid';
import { ImageGalleryLi, ImageGalleryUl } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ props }) => {
  const arr = props.data.hits;

  return (
    <div>
      <ImageGalleryUl>
        {arr.map(item => (
          <ImageGalleryLi key={nanoid(4)}>
            <ImageGalleryItem item={item} />
          </ImageGalleryLi>
        ))}
      </ImageGalleryUl>
    </div>
  );
};
