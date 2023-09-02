import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchData } from './Api/Api';
import { Layout } from './App.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
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
        if (this.state.page === 1)
          return this.notify(dataFetch.data.totalHits, 'Nothing found');
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  onloadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  notify = (totalHits, message) => {
    totalHits
      ? toast.success(`Found ${totalHits} images`, {
          position: 'top-center',
          autoClose: 1500,
          theme: 'colored',
        })
      : toast.error(`${message}`, {
          position: 'top-center',
          autoClose: 1500,
          theme: 'colored',
        });
  };

  render() {
    const {
      loading,
      page,
      data: { hits, totalHits },
      error,
    } = this.state;
    const remainderPhoto = totalHits - page * this.state.per_page;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {error && !loading && this.notify(0, 'OOPS! THERE WAS AN ERROR!')}
        {hits.length > 0 && <ImageGallery props={this.state} />}
        {(remainderPhoto > 0 || remainderPhoto > this.state.per_page) && (
          <Button onLoadMore={this.onloadMore} />
        )}
      </Layout>
    );
  }
}
