import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

export default function Forbidden() {
  return (
    <main
      style={{
        textAlign: "center",
      }}>
      <Helmet title="Forbidden" />
      <h1>Forbidden: </h1>
      <h2>You are not authorized to view this page</h2>
      <p>
        Take me{" "}
        <NavLink
          to="/"
          style={{
            textDecoration: "underline",
            color: "var(--clr-pink)",
            textAlign: "center",
          }}>
          home
        </NavLink>
      </p>
    </main>
  );
}
