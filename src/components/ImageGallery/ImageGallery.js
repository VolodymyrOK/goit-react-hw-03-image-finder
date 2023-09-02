import { nanoid } from 'nanoid';

export const ImageGallery = ({ props }) => {
  const arr = props.data.hits;
  const totalHits = props.data.totalHits;
  console.log(props.page);

  return (
    <div>
      <h1>Gallery</h1>
      <p>Total found {totalHits} images</p>
      <ul>
        {arr.map(({ webformatURL, largeImageURL, tags }) => (
          <li key={nanoid(4)}>
            <a href={largeImageURL}>
              <img
                src={webformatURL}
                alt={tags}
                loading="lazy"
                width="300"
                height="210"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
