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

export const Issues = styled.div`
  margin-top: 8rem;

  a {
    background-color: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 2.4rem;

    display: flex;
    align-items: center;
    transition: transform 200ms;

    + a {
      margin-top: 1.6rem;
    }

    &:hover,
    &:focus {
      transform: translateX(10px);
    }

    div {
      margin: 0 1.6rem;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 0.4rem;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
