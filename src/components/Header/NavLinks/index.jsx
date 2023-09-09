import React from "react";
import { Icon } from "../../Icon";
import {
  HoverNavLink,
  LoginLink,
  LogoutLink,
  Pipe,
  ProfileLink,
} from "../styled";
import { logout } from "../../../utils/authUtils";
import { useNavigate } from "react-router-dom";

export default function NavLinks({ isLoggedin, isHomePage }) {
  const navigate = useNavigate();

  return isLoggedin ? (
    <nav>
      <ProfileLink to="/profile">
        <Icon
          id="user-icon"
          width="20px"
          height="20px"
          fill={isHomePage ? "var(--clr-white)" : "var(--clr-secondary)"}
        />
        profile
      </ProfileLink>
      <Pipe
        $transform={"20"}
        $isHomePage={isHomePage}
      />
      <LogoutLink
        $isHomePage={isHomePage}
        to="/"
        onClick={() => logout(navigate)}>
        logout
      </LogoutLink>
    </nav>
  ) : (
    <nav>
      <LoginLink to="/login">login</LoginLink> <Pipe />
      <HoverNavLink to="/register">register</HoverNavLink>
    </nav>
  );
}
