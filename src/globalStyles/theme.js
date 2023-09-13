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
            color: "var(--clr-secondary)",
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.4,
          backgroundColor: "var(--clr-pink)",
          ".Mui-checked.Mui-checked + &": {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: "var(--clr-pink)",
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
  },
});
