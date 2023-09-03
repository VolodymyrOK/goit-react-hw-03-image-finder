import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 16px; */
  padding-bottom: 24px;
`;

export const Loading = styled.div`
  font-size: 58px;
  font-weight: 500;
`;

export const CountPages = styled.div`
  top: 22px;
  margin-left: auto;
  margin-right: 20px;
  position: sticky;
  z-index: 1100;
  font-size: 24px;
  font-weight: 500;
  background-color: transparent;
  color: white;
`;
