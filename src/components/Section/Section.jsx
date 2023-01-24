import PropTypes from 'prop-types';
import { StyledH2 } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <StyledH2>{title}</StyledH2>
      {children}
    </div>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
