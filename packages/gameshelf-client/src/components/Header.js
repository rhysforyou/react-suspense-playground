import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Nav = styled.nav`
  width: 100%;
  height: 4rem;
  padding: 0 0.5rem;
  background: paleturquoise;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  vertical-align: middle;
  display: inline-block;
  min-height: 3rem;
  border-radius: 1.5rem;
  box-sizing: border-box;
  transition: background-color 0.15s ease-out;
  border: 0px solid transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.05);
    border: 2px solid white;
    padding: calc(0.5rem - 2px) calc(1rem - 2px);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
    transition: none;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 600;
`;

export default function Header() {
  return (
    <Nav>
      <NavLink to="/">
        <Title>🎮 Gameshelf</Title>
      </NavLink>
    </Nav>
  );
}
