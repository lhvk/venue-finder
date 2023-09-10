import { LogoLink, NavHeader } from "./styled";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import { Icon } from "../Icon";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { MOBILE } from "../../config";

export default function Header() {
  const isMobile = useMediaQuery(MOBILE);
  const isLoggedin = getLocalStorageItem("user");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <NavHeader $isHomePage={isHomePage}>
      <div className="nav-header-inner">
        <LogoLink
          $isHomePage={isHomePage}
          to="/">
          <Icon
            id="logo-icon"
            width="50px"
            height="50px"
            fill={isHomePage ? "var(--clr-white)" : "var(--clr-secondary)"}
          />
          {!isMobile && (
            <strong>
              venue
              <span className="half-text">Finder</span>
            </strong>
          )}
        </LogoLink>

        <NavLinks
          isLoggedin={isLoggedin}
          isHomePage={isHomePage}
        />
      </div>
    </NavHeader>
  );
}
