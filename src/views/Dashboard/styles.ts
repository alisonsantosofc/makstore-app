import styled from 'styled-components';
import { darken } from 'polished';

export const ProductsList = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    max-width: 1280px;
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
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    padding-bottom: 3rem;

    > picture {
      align-self: center;
      width: 148px;
      height: 148px;

      img {
        width: 100%;
      }
    }

    > p {
      &:nth-child(2) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 1rem;

        > strong {
          display: inline-block;
          width: 60%;
          font-weight: 400;
          font-size: 1rem;
          color: #333;
        }

        > span {
          display: inline-block;
          font-size: 1rem;
          font-weight: 700;
          margin: 5px 0 20px;
          border-radius: 5px;
          padding: 0.5rem;
          color: var(--white-color);
          background: var(--input-bg-color);
        }
      }

      &:nth-child(3) {
        overflow: hidden;
        margin-top: 0.5rem;
        max-height: 2rem;
        font-size: 0.8rem;
      }
    }

    button {
      width: 100%;
      color: #fff;
      padding: 0.5rem 0;
      border: 0;
      overflow: hidden;
      background: #0f52ba;
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
