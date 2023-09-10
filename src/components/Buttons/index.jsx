import { styled } from "styled-components";
import { buttonStyles } from "../../globalStyles/styles";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
  ${buttonStyles}
`;

export const ButtonNavLink = styled(NavLink)`
  ${buttonStyles}
`;

export const ActionsButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: inherit;
  border: 0;
`;
