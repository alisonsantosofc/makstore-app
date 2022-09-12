import styled from 'styled-components';

export const Container = styled.header`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 34px;
  background: var(--gray-color);

  div {
    max-width: 80vw;
    margin: 0 auto;
    padding: 0 2rem;
    padding-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1280px) {
    margin-top: 2rem;
    position: relative;

    div {
      max-width: 100vw;
      font-size: 0.8rem;
    }
  }
`;
