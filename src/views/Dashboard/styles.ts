import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    max-width: 1080px;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    list-style: none;
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    background: var(--white-color);
    width: 218px;
    height: 285px;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;

    img {
      align-self: center;
      width: 60%;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      width: 100%;
      color: #fff;
      padding: 0.5rem 0;
      border: 0;
      overflow: hidden;
      background: #0F52BA;
      border-radius: 0px 0px 8px 8px;

      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#0F52BA')};
      }

      img {
        width: 1rem;
        margin-right: 1rem;
      }

      span {
        text-align: center;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
`;
