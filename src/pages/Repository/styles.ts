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
