import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import {
  SearchFormButton,
  SearchInput,
  SearchbarForm,
} from './Searchbar.styled';
import { MessageToast } from 'components/Messages/Messages';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  changeRequest = evt => {
    this.setState({ query: evt.currentTarget.value });
  };

  searchRequest = evt => {
    evt.preventDefault();
    if (!this.state.query.trim()) {
      this.setState({ query: '' });
      MessageToast('emptysearch', 'Enter data to Search');
      return;
    }
    const queryExt = Date.now() + '/' + this.state.query.toLowerCase();
    this.props.onSubmit(queryExt);
    this.setState({ query: '' });
  };

  render() {
    return (
      <SearchbarForm onSubmit={this.searchRequest}>
        <SearchFormButton type="submit">
          <ImSearch />
        </SearchFormButton>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
          value={this.state.query}
          onChange={this.changeRequest}
        />
      </SearchbarForm>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
