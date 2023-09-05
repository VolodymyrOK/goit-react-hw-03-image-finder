import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchData } from './Api/Api';
import { ButtonUp, CountPages, Layout } from './App.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { MessageToast } from './Messages/Messages';
import Modal from './Modal/Modal';
import { ImageModal } from './Modal/Modal.styled';

import { ImPointUp } from 'react-icons/im';

export class App extends Component {
  state = {
    query: '',
    loading: false,
    page: 1,
    per_page: 12,
    imgHits: [],
    totalHits: 0,
    showModal: false,
    largeImgURL: '',
    largeTags: '',
    isScrollUp: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const dataFetch = await fetchData(query, page);

        if (dataFetch.totalHits === 0) {
          MessageToast('errorfound', 'Nothing found');
          return;
        }

        this.setState(prevState => ({
          imgHits: [...prevState.imgHits, ...dataFetch.hits],
          totalHits: dataFetch.totalHits,
        }));

        if (
          dataFetch.totalHits ===
          prevState.imgHits.length + dataFetch.hits.length
        )
          MessageToast('foundok', `Search completed. There is nothing more.`);

        if (prevState.query !== query)
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
      totalHits: 0,
    });
  };

  onScrollUp = () => {
    scroll.scrollToTop();
    this.setState({ isScrollUp: false });
  };

  onScroll = () => {
    if (window.scrollY > 300) {
      this.setState({ isScrollUp: true });
    } else {
      this.setState({ isScrollUp: false });
    }
  };

  getlargeImgURL = url => {
    this.setState({
      largeImgURL: url,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const {
      loading,
      imgHits,
      totalHits,
      showModal,
      largeImgURL,
      largeTags,
      isScrollUp,
    } = this.state;

    return (
      <Layout onWheel={this.onScroll}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {imgHits.length > 0 && (
          <CountPages>{imgHits.length + '/' + totalHits}</CountPages>
        )}

        {loading && <Loader />}

        {imgHits.length > 0 && (
          <ImageGallery
            props={this.state}
            getLargeImgUrl={this.getlargeImgURL}
            toggleModal={this.toggleModal}
          />
        )}

        {totalHits !== imgHits.length && !loading && (
          <Button onLoadMore={this.onloadMore} />
        )}

        {isScrollUp && (
          <ButtonUp type="button" onClick={this.onScrollUp}>
            <ImPointUp />
          </ButtonUp>
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageModal
              src={largeImgURL}
              alt={largeTags}
              title="Press Esc to exit"
            />
          </Modal>
        )}
      </Layout>
    );
  }
}
