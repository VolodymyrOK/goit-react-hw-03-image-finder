import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <ButtonLoadMore type="button" onClick={this.props.onLoadMore}>
        Load more
      </ButtonLoadMore>
    );
  }
}

Button.propTypes = {
  onLoadMore: PropTypes.func,
};
