import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoLink = styled(Link)`
  color: ${(props) =>
    props.$isHomePage ? "var(--clr-white)" : "var(--clr-secondary)"};
  display: flex;
  gap: 10px;
  align-items: center;
  transition: opacity 300ms ease-in-out;

  // .half-text {
  //   color: var(--logo-font-clr);
  // }
`;
