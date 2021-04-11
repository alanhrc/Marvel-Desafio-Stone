import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 52.5rem; */
  width: 100%;

  margin: 0 auto;
`;

export const Header = styled.header`
  span.category {
    display: block;
    margin-top: 1rem;
    margin-left: 5rem;

    font-size: 2.25rem;
    font-weight: 600;
    color: var(--gray);
  }

  span {
    color: var(--white);
  }
`;

export const Main = styled.main`
  width: 100%;
  margin-top: 2rem;

  .movies-list {
    /* display: grid; */
    /* grid-template-columns: repeat(3, 1fr); */
    grid-gap: 2rem;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: 0 auto;
  }
`;
