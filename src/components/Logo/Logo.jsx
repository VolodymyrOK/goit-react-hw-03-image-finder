import { LogoImg, LogoWrapper } from './Logo.styled';
import search from '../../images/search.png';
import images from '../../images/images.png';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg class="search-img" src={search} alt="Logo" height="92" />
      <LogoImg class="search-img" src={images} alt="Logo" height="92" />
    </LogoWrapper>
  );
};
