import { BrowserRouter } from "react-router-dom";
import ApplicationRouter from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <ApplicationRouter />
    </BrowserRouter>
  );
}
