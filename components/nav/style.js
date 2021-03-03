import styled from "styled-components";

export const Nav = styled.nav`
  padding: 20px;
  color: white;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px;
  }

  li {
    list-style: none;
  }

  a {
    padding: 10px;
  }
`;
