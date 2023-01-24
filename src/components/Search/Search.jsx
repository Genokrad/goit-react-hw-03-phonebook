import PropTypes from 'prop-types';
import { StyledDiv, StyledP, StyledInput } from './Search.styled';

export const Search = ({ filter, onChange }) => {
  return (
    <StyledDiv>
      <StyledP className="inputTitle">Find contact by name:</StyledP>
      <StyledInput
        className="inputTag"
        type="text"
        name="filter"
        title="Please enter the name"
        onChange={onChange}
        value={filter}
      />
    </StyledDiv>
  );
};

Search.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
