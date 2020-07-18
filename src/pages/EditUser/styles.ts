import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  background: #f5f5e8;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    color: #000;
    width: 50%;
    margin-left: 25%;

    button {
      display: flex;
      align-self: center;
      justify-content: center;

      margin-top: 16px;
      width: 378px;
      height: 40px;
      background: #ffffff;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 35px;
      border-color: #fff;
      opacity: 1;
      font-weight: bold;
      font-size: 14px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#f7f7f7')};
      }
    }

    a {
      display: flex;
      justify-content: center;
      text-decoration: none;
    }
  }
`;
