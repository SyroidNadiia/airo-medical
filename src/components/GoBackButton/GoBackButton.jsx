import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './GoBackButton.styled';

export const GoBackBtn = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

GoBackBtn.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
};
