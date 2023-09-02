import { LogoImg, LogoWrapper } from './Logo.styled';
import logo from '../../images/search-images.png';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg class="search-img" src={logo} alt="Search images" height="92" />
    </LogoWrapper>
  );
};
