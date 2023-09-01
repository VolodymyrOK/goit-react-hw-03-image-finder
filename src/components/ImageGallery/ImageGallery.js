import { Component } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '38278991-17cfe7c1d9183e0e901f08bd5';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
const WIDTH = 300;
const HEIGHT = 210;
const PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;

export class ImageGallery extends Component {
  state = {
    hits: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const params = new URLSearchParams({
      key: KEY,
      q: this.props.query,
      image_type: IMAGE_TYPE,
      orientation: ORIENTATION,
      safesearch: SAFESEARCH,
      per_page: PER_PAGE,
      page: 1,
    });
    if (prevProps.query !== this.props.query) {
      try {
        await axios.get(`?${params}`).then(({ data }) => {
          this.setState(data);
        });
      } catch (error) {}
    }
  }

  render() {
    const { hits } = this.state;
    console.log(hits);
    console.log(this.props.query);
    return (
      <div>
        <h1>Gallery</h1>
        {hits.length !== 0 && this.props.query !== '' ? (
          <ul>
            {hits.map(({ webformatURL, largeImageURL, tags }) => (
              <li key={nanoid(4)}>
                <a href={largeImageURL}>
                  <img
                    src={webformatURL}
                    alt={tags}
                    loading="lazy"
                    width={WIDTH}
                    height={HEIGHT}
                  />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <span>No images in gallery</span>
        )}
      </div>
    );
  }
}
