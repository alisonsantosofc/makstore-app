import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  z-index: 1;
  position: fixed;
  top: 0;
  right: -30%;
  width: 30%;
  height: 100vh;
  background: var(--main-color);
  color: var(--white-color);
  padding: 0 2.5rem;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: right ease-in 0.5s;

  &.isOpen {
    right: 0;
  }

  > div {
    position: relative;
    margin-top: 2rem;

    h2 {
      font-size: 1.7rem;
      font-weight: 600;
    }

    > svg {
      width: 38px;
      height: 38px;
      position: absolute;
      top: 0;
      right: -1rem;
      font-size: 1rem;
      padding: 0.4rem;
      border-radius: 50%;
      background: var(--black-color);
      cursor: pointer;
    }
  }

  > button {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 95px;
    border: none;
    font-size: 1.8rem;
    font-weight: 700;
    background: var(--black-color);
    color: var(--white-color);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  > p {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1.8rem;
    font-weight: 700;
    padding: 0 3rem;
    position: absolute;
    bottom: 95px;
    right: 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 1080px) {
    right: -100%;
    width: 100%;
    padding: 0 1.5rem;

    > p {
      font-size: 1.2rem;
      bottom: 3rem;
    }

    > button {
      height: 4rem;
      font-size: 1.2rem;
    }
  }
`;

export const ProductsInCart = styled.ul`
  margin-top: 3rem;
  width: 100%;
  overflow: hidden;
  max-height: 60%;
  padding: 0.5rem 1rem;

  &.scroll-element {
    overflow-y: scroll;
  }

  li {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    list-style: none;
    color: var(--black-color);
    background: var(--white-color);
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 1rem 0.5rem;

    & + li {
      margin-top: 2rem;
    }

    picture {
      width: 15%;
      margin-right: 1rem;

      img {
        align-self: center;
        width: 100%;
      }
    }

    p {
      width: 25%;
      font-size: 0.9rem;
      margin-right: 2rem;
    }

    div {
      position: relative;
      display: flex;
      align-items: center;
      border-radius: 4px;
      border: solid 1px var(--border-color);

      span {
        font-size: 0.8rem;
        display: block;
        margin: 0 0.5rem;

        &:first-child {
          font-size: 0.7rem;
          position: absolute;
          top: -1.2rem;
          left: -0.5rem;
        }
      }

      button {
        background: none;
        border: 0;
        padding: 0.5rem 0.8rem;

        svg {
          font-size: 0.7rem;
        }

        &:hover {
          filter: brightness(0.9);
        }

        &:disabled {
          filter: brightness(0.5);
        }
      }
    }

    > span {
      margin-left: 2rem;
      font-size: 1rem;
      font-weight: 700;
    }

    > svg {
      width: 28px;
      height: 28px;
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      font-size: 1rem;
      padding: 0.4rem;
      border-radius: 50%;
      color: var(--white-color);
      background: var(--black-color);
      cursor: pointer;
    }
  }

  @media (max-width: 1080px) {
    padding: 0.5rem;

    li {
      p {
        font-size: 0.7rem;
      }

      div {
        span {
          font-size: 0.6rem;
          margin: 0 0.2rem;

          &:first-child {
            font-size: 0.6rem;
          }
        }
        button {
          font-size: 0.6rem;
        }
      }

      > span {
        font-size: 0.7rem;
      }

      > svg {
        width: 22px;
        height: 22px;
      }
    }
  }
`;
