import {
  LoginLink,
  LogoutLink,
  NavHeader,
  Pipe,
  ProfileLink,
  StyledNavLink,
} from "./styled";
import { useLocation } from "react-router-dom";
import { Icon } from "../Icon";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLoggedin = false;

  function navLinksLoggedIn() {
    return (
      <>
        <ProfileLink to="/profile">
          <Icon
            id="user-icon"
            width="20px"
            height="20px"
            fill={isHomePage ? "white" : ""}
          />
          profile
        </ProfileLink>
        <Pipe /> <LogoutLink to="logout">logout</LogoutLink>
      </>
    );
  }

  function navLinksLoggedOut() {
    return (
      <>
        <LoginLink to="/login">login</LoginLink> <Pipe />
        <StyledNavLink to="/register">register</StyledNavLink>
      </>
    );
  }

  return (
    <NavHeader isHomePage={isHomePage}>
      <div className="nav-header-inner">
        <div className="app-logo">
          <StyledNavLink to="/">Venue finder</StyledNavLink>
        </div>
        <nav>{isLoggedin ? navLinksLoggedIn() : navLinksLoggedOut()}</nav>
      </div>
    </NavHeader>
  );
}
