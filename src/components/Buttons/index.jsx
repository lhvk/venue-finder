import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const ButtonNavLink = styled(NavLink)`
  color: inherit;
  font-size: inherit;
  background: transparent;
  border: 1px solid var(--clr-white);
  padding-inline: ${(props) => props.$px || "10px"};
  padding-block: ${(props) => props.$py || null};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Button = styled.button`
  color: var(--clr-white);
  font-size: inherit;
  background-color: var(--clr-secondary);
  border: none;
  padding-inline: ${(props) => props.$px || "16px"};
  padding-block: ${(props) => props.$py || "8px"};
  cursor: pointer;

  &:hover {
    background-color: #e55600;
  }
`;
