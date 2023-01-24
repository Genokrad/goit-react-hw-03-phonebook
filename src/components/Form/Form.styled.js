import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 1px solid black;
  padding: 30px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  width: 150px;
  height: 30px;
  color: black;
  background-color: orange;
  &:hover {
    color: white;
    background-color: darkorange;
  }
`;
