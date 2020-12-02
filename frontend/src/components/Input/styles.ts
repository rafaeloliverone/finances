import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  background-color: #FFF;
  color: #666360;
  border-radius: 10px;
  padding: 16px;
  border: 1.5px solid #666360;


  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #666360;
    text-decoration: none;

    &::placeholder {
      color: #666360;
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    margin-right: 16px;
  }


`;
