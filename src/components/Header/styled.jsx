import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavHeader = styled.header`
  position: ${(props) => (props.$isHomePage ? "absolute" : "relative")};
  background-color: ${(props) =>
    props.$isHomePage ? "transparent" : "var(--clr-white)"};
  color: ${(props) => (props.$isHomePage ? "var(--clr-white)" : "")};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;

  & .nav-header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-inline: 20px;

    & nav {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const Pipe = styled.hr`
  color: inherit;
  height: 26px;
  align-self: flex-start;
  border-style: solid;
  border-width: 1px;
  transform: rotate(180deg);
`;

export const HoverNavLink = styled(NavLink)`
  &:hover {
    opacity: 0.7;
  }
`;

export const LogoLink = styled(HoverNavLink)`
  display: flex;
  gap: 10px;
  align-items: center;

  .half-text {
    color: var(--clr-primary);
  }
`;

export const ProfileLink = styled(HoverNavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LogoutLink = styled.button`
  color: inherit;
  font-size: inherit;
  background: transparent;
  border: 1px solid var(--clr-white);
  padding: 3px 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
