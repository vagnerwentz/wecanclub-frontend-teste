import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: stretch;
  text-align: center;

  .carousel {
    width: 100vw;
    overflow: hidden;
    .d-block {
      background: transparent linear-gradient(308deg, #805ae8 0%, #24047d 100%)
        0% 0% no-repeat padding-box;
    }
    .d-block-two {
      background: transparent linear-gradient(308deg, #aed233 0%, #729202 100%)
        0% 0% no-repeat padding-box;
    }
    .d-block-three {
      background: transparent linear-gradient(308deg, #f2d433 0%, #bfa203 100%)
        0% 0% no-repeat padding-box;
    }
  }

  > h1 {
    position: absolute;
    text-align: left;
    width: 322px;
    height: 169px;
    font-size: 72px;
    top: 40%;
    right: 47.5%;
    transform: translate(-50%, -50%);
  }

  > span {
    position: absolute;
    text-align: left;
    top: 60%;
    right: 36.5%;
    transform: translate(-50%, -50%);
    height: 164px;
    width: 460px;
    margin-left: 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 498.73px;
  height: 900px;
  max-width: 900px;

  > img {
    top: 193px;
    left: 154px;
    width: 190px;
    height: 57px;
    opacity: 1;
  }

  > h1 {
    font: Bold 18px/22px Montserrat;
    color: #000000;
    margin-top: 26.61px;
  }

  form {
    margin: 30px 0;
    width: 400px;
    text-align: center;

    a {
      width: 115px;
      height: 18px;
      font: Medium 14px/18px Montserrat;
      color: #fff;
      opacity: 1;
      text-decoration: none;
    }
  }

  hr {
    align-self: center;
    margin-top: 2px;
    color: #fff;
    width: 390px;
  }

  h1 {
    font-size: 18px;
    width: 234px;
    height: 22px;
    text-align: center;
    font: Bold Montserrat;
    color: #000000;
  }

  > button {
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
`;
