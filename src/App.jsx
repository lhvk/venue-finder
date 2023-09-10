import { BrowserRouter } from "react-router-dom";
import ApplicationRouter from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ApplicationRouter />
      </LocalizationProvider>
    </BrowserRouter>
  );
}
