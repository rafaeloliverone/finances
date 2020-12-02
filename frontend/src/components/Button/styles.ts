import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: black;
  background: #00FF65;
  width: 100%;
  height: 56px;
  border: 0;
  border-radius: 10px;

  padding: 0 16px;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
  outline: none;

  &:hover {
    background-color: ${shade(0.2, '#00FF65')};
    color: black;
    cursor: pointer;
  }
`;
