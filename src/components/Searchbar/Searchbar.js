import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import {
  SearchFormButton,
  SearchInput,
  SearchbarForm,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  changeRequest = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  notify = () =>
    toast.info('💻 Enter data to search', {
      position: 'top-center',
      autoClose: 1500,
      theme: 'colored',
    });

  searchRequest = evt => {
    evt.preventDefault();
    if (!this.state.query.trim()) {
      this.setState({ query: '' });
      return this.notify();
    }
    const queryExt = Date.now() + '/' + this.state.query.toLowerCase();
    this.props.onSubmit(queryExt);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarForm onSubmit={this.searchRequest}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
          value={this.state.query}
          onChange={this.changeRequest}
        />

        <SearchFormButton type="submit">
          <ImSearch />
        </SearchFormButton>
      </SearchbarForm>
    );
  }
}
