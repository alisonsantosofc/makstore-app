import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  width: 100%;

  svg {
    font-size: 4rem;
    margin-right: 1rem;
  }

  .message-content {
    h4 {
      font-size: 1.2rem;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--text-shape);
    }
  }
`;
