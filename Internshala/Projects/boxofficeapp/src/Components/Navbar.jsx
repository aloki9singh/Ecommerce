import styled from "styled-components";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/Public.css";
const Navbar = () => {
  const LINKS = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" },
  ];
  return (
    <div>
      <NavList>
        {LINKS.map((e, i) => (
          <li key={e.to} >
            <LinkStyled to={e.to} >{e.text}</LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navbar;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;
//  styled is function ancompd navlink is
const LinkStyled = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active {
    color: ${({ theme }) => theme.mainColors.blue};
    &:after {
      content: "";
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;
