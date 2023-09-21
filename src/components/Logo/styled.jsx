import styled from "styled-components";
import { HoverNavLink } from "../Header/styled";

export const LogoLink = styled(HoverNavLink)`
  color: ${(props) =>
    props.$isHomePage ? "var(--clr-white)" : "var(--clr-secondary)"};
  display: flex;
  gap: 10px;
  align-items: center;

  .half-text {
    color: var(--clr-pink);
  }
`;
