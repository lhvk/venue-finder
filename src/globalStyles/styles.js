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

export function staticDatePickerStyles(isTablet) {
  const customStyles = {
    ".MuiDialogActions-root": {
      display: "none",
    },
    "&.MuiPickersLayout-root": {
      alignItems: isTablet ? "flex-start" : "flex-end",
      minWidth: isTablet ? "100%" : "280px",
      display: "flex",
      flexDirection: "column",

      ".MuiPickersLayout-contentWrapper": {
        ".MuiDateCalendar-root": {
          width: "unset",
        },
      },
      ".MuiPickersCalendarHeader-root": {
        padding: 0,
      },
      ".MuiPickersCalendarHeader-labelContainer": {
        fontSize: "1.6rem",
      },
      ".MuiPickersDay-root": {
        pointerEvents: "none",
      },
    },
  };

  return customStyles;
}
