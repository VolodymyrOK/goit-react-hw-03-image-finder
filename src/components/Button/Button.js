import { Component } from 'react';
import { ButtonLoadMore } from './Button.styled';

export class Button extends Component {
  render() {
    return (
      <ButtonLoadMore onClick={this.props.onLoadMore}>Load more</ButtonLoadMore>
    );
  }
}
