import { LogoImg, LogoWrapper } from './Logo.styled';
import search from '../../images/search.png';
import images from '../../images/images.png';

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImg src={search} alt="Logo" />
      <LogoImg src={images} alt="Logo" />
    </LogoWrapper>
  );
};
