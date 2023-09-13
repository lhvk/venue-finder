import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import Venue from "./Venue";
import RouteNotFound from "./RouteNotFound";
import CreateVenue from "./CreateVenue";
import EditVenue from "./EditVenue";
import Forbidden from "./Forbidden";

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
          path="/create-venue"
          element={<CreateVenue />}
        />
        <Route
          path="/edit-venue/:id"
          element={<EditVenue />}
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
          path="/forbidden"
          element={<Forbidden />}
        />
        <Route
          path="*"
          element={<RouteNotFound />}
        />
      </Route>
    </Routes>
  );
}
