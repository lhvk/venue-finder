import { css } from "styled-components";

export const buttonStyles = css`
  color: ${(props) => props.$color || "var(--clr-white)"};
  font-size: inherit;
  background: ${(props) =>
    props.$background ||
    "linear-gradient(0.25turn, var(--clr-pink), var(--clr-primary))"};
  border: none;
  padding-inline: ${(props) => props.$px || "16px"};
  padding-block: ${(props) => props.$py || "8px"};
  cursor: pointer;
  max-width: ${(props) => props.$maxWidth || "fit-content"};
  width: ${(props) => props.$width};
  border-radius: 8px;
  transition: padding-inline 500ms, opacity 500ms ease-in-out;

  &:hover {
    padding-inline: 20px;
    opacity: 0.8;
  }
`;
