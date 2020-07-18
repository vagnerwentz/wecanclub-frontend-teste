import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #000000;
  margin-top: 30px;
  font: Bold 18px/22px Montserrat;
  margin-bottom: 20px;
  width: 378px;
  height: 40px;
  border-radius: 35px;
  border: 0;
  padding: 0 16px;
  color: #f5f5f5;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
