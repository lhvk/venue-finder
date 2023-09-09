import { styled } from "styled-components";
import { buttonStyles } from "../../globalStyles/styles";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
  ${buttonStyles}
`;

export const ButtonNavLink = styled(NavLink)`
  ${buttonStyles}
`;
