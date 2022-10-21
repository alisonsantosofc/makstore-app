import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  width: 100vw;
  height: 100px;
  background: var(--main-color);

  div {
    color: var(--black-color);

    strong {
      font-weight: 700;
      font-size: 2.5rem;
      margin-right: 0.5rem;
    }

    span {
      font-weight: 500;
      font-size: 1.2rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 8px;
    background: var(--black-color);
    color: var(--white-color);

    span {
      font-size: 1rem;
      font-weight: 600;
      margin-left: 1rem;
    }
  }

  @media (max-width: 1280px) {
    padding: 0 1rem;

    div {
      strong {
        font-size: 2rem;
      }

      span {
        font-size: 1rem;
      }
    }
  }
`;
