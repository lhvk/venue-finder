import { NavHeader } from "./styled";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import NavLinks from "./NavLinks";
import { Logo } from "../Logo";

export default function Header({ isHomePage, isMobile }) {
  const isLoggedin = getLocalStorageItem("user");

  return (
    <NavHeader $isHomePage={isHomePage}>
      <div className="nav-header-inner">
        <Logo
          isMobile={isMobile}
          isHomePage={isHomePage}
        />
        <NavLinks
          isLoggedin={isLoggedin}
          isHomePage={isHomePage}
        />
      </div>
    </NavHeader>
  );
}
