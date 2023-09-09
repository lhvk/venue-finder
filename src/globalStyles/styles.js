import { css } from "styled-components";

export const buttonStyles = css`
  color: var(--clr-white);
  font-size: inherit;
  background: linear-gradient(0.25turn, var(--clr-pink), var(--clr-primary));
  border: none;
  padding-inline: ${(props) => props.$px || "16px"};
  padding-block: ${(props) => props.$py || "8px"};
  cursor: pointer;
  max-width: ${(props) => props.$maxWidth || "fit-content"};
  width: ${(props) => props.$width};

  &:hover {
    background: linear-gradient(
      0.25turn,
      var(--clr-secondary),
      var(--clr-pink)
    );
  }
`;
