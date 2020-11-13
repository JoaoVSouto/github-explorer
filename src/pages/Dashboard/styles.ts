import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 4.8rem;
  max-width: 45rem;
  line-height: 5.6rem;

  margin-top: 8rem;
`;

export const Form = styled.form`
  margin-top: 4rem;
  max-width: 70rem;

  display: flex;

  input,
  button {
    height: 7rem;
  }

  input {
    flex: 1;
    padding: 0 2.4rem;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 21rem;
    background-color: #04d361;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    user-select: none;
    transition: background-color 200ms;

    &:hover,
    &:focus {
      background-color: ${shade(0.2, '#04d361')};
    }

    &:active {
      background-color: ${shade(0.4, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 8rem;
  max-width: 70rem;

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

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }

    div {
      margin-left: 1.6rem;

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
