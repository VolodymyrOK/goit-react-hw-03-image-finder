import styled from 'styled-components';

export const SearchbarForm = styled.form`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 16px 24px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme: { colors } }) => colors.backgroundColor};
  color: ${({ theme: { colors } }) => colors.color};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchInput = styled.input`
  font-size: 18px;
  display: flex;
  padding: 8px 12px;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border-color: transparent;
  overflow: hidden;
  outline: none;
`;

export const SearchFormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 41px;
  border-color: transparent;
  opacity: 1;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  & svg {
    font-size: 24px;
    fill: #3f51b5;
  }
  &:hover {
    opacity: 0.6;
  }
`;

export const ToastCustom = styled.div`
  background-color: blue;
`;
