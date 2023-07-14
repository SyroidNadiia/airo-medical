import PropTypes from 'prop-types';
import { BtnLoadMore } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ isLoading, onLoadMore }) => {
  return (
    <BtnLoadMore  onClick={onLoadMore}>
      {isLoading ? 'Loading...' : 'Load More'}
    </BtnLoadMore>
  );
};


ButtonLoadMore.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
