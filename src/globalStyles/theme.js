import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "var(--clr-grey)",
        },
        colorPrimary: {
          "&.Mui-checked": {
            // Controls checked color for the thumb
            color: "var(--clr-pink)",
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.4,
          backgroundColor: "var(--clr-pink)",
          ".Mui-checked + &": {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: "var(--clr-pink)!important",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          fontSize: "inherit",
          fontFamily: "inherit",
          letterSpacing: 0,
          lineHeight: "none",
          backgroundColor: "var(--clr-white)",
          paddingRight: "6px",
        },
        root: {
          "&.Mui-focused": {
            color: "var(--clr-text)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontSize: "inherit",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: { width: "24px", height: "24px", fill: "var(--clr-dark)" },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiDayCalendar-weekDayLabel": { fontSize: "1.2rem" },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.MuiPickersDay-root": {
            fontSize: "1.2rem",
            "&.Mui-selected": {
              background: "var(--gradient-primary)",
              "&:hover, &:focus": {
                backgroundColor: "var(--gradient-primary)",
              },
            },
          },
        },
      },
    },
  },
});
