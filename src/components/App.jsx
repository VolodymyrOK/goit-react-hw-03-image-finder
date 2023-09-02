import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchData } from './Api/Api';

export class App extends Component {
  stateInit = {
    query: null,
    loading: false,
    error: false,
    page: 1,
    per_page: 12,
    data: {
      hits: [],
      total: null,
      totalHits: null,
    },
  };

  state = {
    query: null,
    loading: false,
    error: false,
    page: 1,
    per_page: 12,
    data: {
      hits: [],
      total: null,
      totalHits: null,
    },
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      if (prevState.query !== this.state.query) this.setState({ page: 1 });
      try {
        this.setState({ loading: true });
        const dataFetch = await fetchData(this.state.query, this.state.page);
        this.setState({ data: dataFetch.data });
        if (this.state.page === 1) {
          return this.notify(dataFetch.data.totalHits);
        }
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  notify = totalHits =>
    toast.success(`Found ${totalHits} images`, {
      position: 'top-center',
      autoClose: 1500,
      theme: 'colored',
    });

  render() {
    const {
      loading,
      page,
      data: { hits, totalHits },
      error,
    } = this.state;
    const remainderPhoto = totalHits - page * this.state.per_page;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <div>LOADING...</div>}
        {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
        {hits.length > 0 && (
          <>
            <ImageGallery props={this.state} />
          </>
        )}
        {(remainderPhoto > 0 || remainderPhoto > this.state.per_page) && (
          <>
            <button onClick={this.loadMore}>Load more</button>
          </>
        )}
        <ToastContainer />
      </div>
    );
  }
}
