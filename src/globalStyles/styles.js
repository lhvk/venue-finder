import { css } from "styled-components";

export const buttonStyles = css`
  color: ${(props) => props.$color || "var(--clr-white)"};
  font-size: inherit;
  background: ${(props) => props.$background || "var(--gradient-primary)"};
  border: ${(props) => props.$border || "none"};
  padding-inline: ${(props) => props.$px || "16px"};
  padding-block: ${(props) => props.$py || "8px"};
  cursor: pointer;
  max-width: ${(props) => props.$maxWidth || "fit-content"};
  width: ${(props) => props.$width};
  border-radius: 8px;
  opacity: ${(props) => (props.$isCancelBtn ? 0.7 : "unset")};
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: ${(props) => (props.$isCancelBtn ? 1 : 0.8)};
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
