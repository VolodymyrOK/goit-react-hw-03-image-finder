import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38278991-17cfe7c1d9183e0e901f08bd5';

export class ImageGallery extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    per_page: 12,
    totalHits: null,
    orientation: 'horizontal',
    image_type: 'photo',
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      await axios
        .get(
          `?key=${API_KEY}&q=${this.state.query}&orientation=${this.state.orientation}&page=${this.state.page}&per_page=${this.state.per_page}&image_type=${this.state.image_type}`
        )
        .then(images => this.setState({ images }))
        .finally(() => this.setState({ loading: false }));
    } catch (error) {}
  }

  changeRequest = evt => {
    console.log(evt);
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  search = evt => {
    evt.preventDefault();
    console.log(evt.currentTarget.elements[0].value);
    this.setState({
      query: evt.target.elements[0].value,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.query) return alert('Нет данных для поиска');
    if (
      prevState.query !== this.state.query ||
      prevState.page <= this.state.page
    ) {
      axios
        .get(
          `?key=${API_KEY}&q=${this.state.query}&orientation=${this.state.orientation}&page=${this.state.page}&per_page=${this.state.per_page}`
        )
        .then(({ data: { totalHits, hits } }) => {
          const found = this.state.page * this.state.per_page;
          console.log(totalHits, found, hits);
          if (totalHits < found && !hits.length) {
            console.log('Ничего не найдено');
            return;
          }
        });
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    const aa = this.state.page * this.state.per_page;
    const aa1 = this.state.totalHits;
    console.log(aa, aa1);
    if (aa > aa1) return alert('End array');
  };
  render() {
    return (
      <div>
        <form onSubmit={this.search}>
          <input
            type="text"
            name="request"
            onChangeRequest={this.changeRequest}
          />

          <button type="submit">
            <ImSearch style={{ marginRight: 8 }} /> Search
          </button>
        </form>
        {this.state.images.length > 0 && <div>Gallery</div>}
        <button onClick={this.loadMore}>Load more</button>
      </div>
    );
  }
}
