import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import Venue from "./Venue";
import RouteNotFound from "./RouteNotFound";

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
          path="/venue/:id"
          element={<Venue />}
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
        <Route
          path="*"
          element={<RouteNotFound />}
        />
      </Route>
    </Routes>
  );
}
