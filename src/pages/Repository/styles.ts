import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    color: #a8a8b3;
    font-weight: bold;
    transition: color 200ms;

    &:hover,
    &:focus {
      color: #666;
    }

    svg {
      margin-right: 0.4rem;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 8rem;

  .main-info {
    display: flex;
    align-items: center;

    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        font-size: 3.6rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #737380;
        margin-top: 0.4rem;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 4rem;

    li {
      + li {
        margin-left: 8rem;
      }

      strong {
        display: block;
        font-size: 3.6rem;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 0.4rem;
        color: #6c6c80;
      }
    }
  }
`;
