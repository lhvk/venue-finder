import { LogoLink } from "./styled";
import { Icon } from "../Icon";

export function Logo({ isMobile, isHomePage }) {
  return (
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
  );
}
