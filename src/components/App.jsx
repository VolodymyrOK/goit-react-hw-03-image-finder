import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchData } from './Api/Api';
import { CountPages, Layout } from './App.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { MessageToast } from './Messages/Messages';

export class App extends Component {
  state = {
    query: '',
    loading: false,
    page: 1,
    per_page: 12,
    imgHits: [],
    allImages: false,
    totalHits: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const dataFetch = await fetchData(this.state.query, this.state.page);

        if (dataFetch.hits.length === 0) {
          MessageToast('errorfound', 'Nothing found');
          this.setState(prevState => ({ imgHits: [] }));
          return;
        }

        this.setState(prevState => ({
          imgHits:
            prevState.query === this.state.query
              ? [...prevState.imgHits, ...dataFetch.hits]
              : [...dataFetch.hits],
          allImages:
            dataFetch.totalHits ===
            prevState.imgHits.length + dataFetch.hits.length,
          totalHits: dataFetch.totalHits,
        }));

        if (
          dataFetch.totalHits ===
          prevState.imgHits.length + dataFetch.hits.length
        )
          MessageToast('foundok', `Search completed. There is nothing more.`);

        if (prevState.query !== this.state.query)
          MessageToast('foundok', `Found ${dataFetch.totalHits} images`);
      } catch (error) {
        MessageToast('errorloading', 'OOPS! There was an error!');
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));

    scroll.scrollMore(500);
  };

  handleFormSubmit = queryNew => {
    this.setState({
      query: queryNew,
      imgHits: [],
      page: 1,
    });
  };

  render() {
    const { loading, imgHits, allImages, totalHits } = this.state;
    console.log(imgHits.length + '/' + totalHits);

    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <CountPages>{imgHits.length + '/' + totalHits}</CountPages>

        {loading && <Loader />}

        {imgHits.length > 0 && <ImageGallery props={this.state} />}

        {imgHits.length > 0 && !allImages && (
          <Button onLoadMore={this.onloadMore} />
        )}
      </Layout>
    );
  }
}
