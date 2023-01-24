import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledDiv, StyledButton } from './Form.styled';

export class Form extends Component {
  state = { name: '', number: '' };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    // console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.send({ ...this.state });

    this.setState({
      name: '',
      number: '',
    });
    // console.log(this.state);
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledDiv>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </StyledDiv>
        <StyledDiv>
          <label htmlFor="">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </StyledDiv>
        <StyledButton>Add contact</StyledButton>
      </StyledForm>
    );
  }
}

Form.propTypes = {
  send: PropTypes.func.isRequired,
};
