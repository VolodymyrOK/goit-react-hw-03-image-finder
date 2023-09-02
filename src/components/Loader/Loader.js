import { RotatingLines } from 'react-loader-spinner';
import { LoaderStile } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStile>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderStile>
  );
};
