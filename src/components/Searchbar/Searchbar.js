import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  changeRequest = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  notify = () =>
    toast.error('💻 Enter data to search', {
      position: 'top-center',
      autoClose: 3000,
      theme: 'colored',
    });

  searchRequest = evt => {
    evt.preventDefault();
    if (!this.state.query.trim()) {
      this.setState({ query: '' });
      return this.notify();
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form onSubmit={this.searchRequest}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
          value={this.state.query}
          onChange={this.changeRequest}
        />

        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} /> Search
        </button>
      </form>
    );
  }
}
