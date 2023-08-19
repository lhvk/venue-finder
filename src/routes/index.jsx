import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";

export default function ApplicationRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Route>
    </Routes>
  );
}
