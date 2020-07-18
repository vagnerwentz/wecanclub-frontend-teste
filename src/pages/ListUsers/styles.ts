import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  a {
    position: absolute;
    top: 5.3%;
    color: #000;

    text-decoration: none;
    left: 90%;

    &:hover {
      color: ${shade(0.1, '#f99909')};
    }
  }

  > h1 {
    color: #000;
  }

  table {
    font-size: 16px;
    margin: 15px;
    tr {
      td {
        position: relative;
        a {
          position: initial;
        }
      }
      th {
      }
    }
  }
`;
