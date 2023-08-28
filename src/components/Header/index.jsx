import { HoverNavLink, Logo, LogoLink, NavHeader } from "./styled";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import { Icon } from "../Icon";

export default function Header() {
  const isLoggedin = getLocalStorageItem("user");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <NavHeader $isHomePage={isHomePage}>
      <div className="nav-header-inner">
        <LogoLink to="/">
          <Icon
            id="logo-icon"
            width="50px"
            height="50px"
            fill={isHomePage ? "var(--clr-white)" : "#333"}
          />
          <strong>
            venue
            <span className="half-text">Finder</span>
          </strong>
        </LogoLink>

        <NavLinks
          isLoggedin={isLoggedin}
          isHomePage={isHomePage}
        />
      </div>
    </NavHeader>
  );
}
