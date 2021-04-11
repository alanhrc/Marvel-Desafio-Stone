import styled from 'styled-components';

export const Container = styled.div`
  .movie-card {
    position: relative;

    img {
      width: 14.31rem;
      height: 21.25rem;
    }

    > div {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      justify-content: center;

      background: rgba(31, 34, 41, 0.5);

      transition: background 0.5s;

      &:hover {
        background: 0;
      }

      .movie-info {
        max-width: 12.32rem;
        width: 100%;

        display: flex;
        flex-direction: column;
        transition: color 0.5s;

        span {
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          color: #fbfbfb;

          margin-top: 1rem;
          /* margin-bottom: 0.5rem; */

          &:hover {
            color: #c53030;
            cursor: pointer;
          }
        }

        .meta {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          margin-top: auto;
          margin-bottom: 1rem;

          div {
            display: flex;
            align-items: center;

            font-weight: 600;
            color: var(--gray);

            &:hover {
              color: #c53030;
              cursor: pointer;
            }

            svg {
              color: #fff;
              margin-right: 0.5rem;

              &:hover {
                color: #c53030;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`;
