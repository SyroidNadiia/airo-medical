import { Audio } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styles.jsx';

export const Loader = () => {
  return (
    <StyledLoader>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="violet"
        ariaLabel="loading"
        wrapperStyle
        className="loader-audio"
      />
    </StyledLoader>
  );
};

