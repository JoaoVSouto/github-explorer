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
