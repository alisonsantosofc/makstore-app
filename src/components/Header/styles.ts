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
    color: var(--white-color);

    strong {
      font-weight: 600;
      font-size: 2.5rem;
      margin-right: 0.5rem;
    }

    span {
      font-weight: 300;
      font-size: 1.2rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 8px;

    img {
      width: 1.2rem;
    }

    span {
      font-size: 1rem;
      font-weight: 600;
      margin-left: 1rem;
    }
  }
`;


