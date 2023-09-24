import styled from "styled-components";
import { HoverNavLink } from "../Header/styled";

export const LogoLink = styled(HoverNavLink)`
  color: ${(props) =>
    props.$isHomePage ? "var(--clr-white)" : "var(--clr-secondary)"};
  display: flex;
  gap: 10px;
  align-items: center;
  transition: opacity 300ms ease-in-out;

  .half-text {
    color: var(--clr-pink);
  }
`;
