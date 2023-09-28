import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

export default function RouteNotFound() {
  return (
    <main
      style={{
        textAlign: "center",
      }}>
      <Helmet title="404: Route not found" />
      <h1>Route not found</h1>

      <p>
        Take me{" "}
        <NavLink
          to="/"
          style={{
            textDecoration: "underline",
            color: "var(--clr-primary)",
            textAlign: "center",
          }}>
          home
        </NavLink>
      </p>
    </main>
  );
}
