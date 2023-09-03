import styled from 'styled-components';

export const ImageGalleryItemIMG = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
  box-shadow: 3px 4px 7px 3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 3px 4px 7px 3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 4px 7px 3px rgba(0, 0, 0, 0.75);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
