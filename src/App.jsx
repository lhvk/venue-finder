import { BrowserRouter } from "react-router-dom";
import ApplicationRouter from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ThemeProvider } from "@mui/material";
import { theme } from "./globalStyles/theme";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <ApplicationRouter />
          <ToastContainer />
        </ThemeProvider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
