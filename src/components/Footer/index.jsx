import { Icon } from "../Icon";
import { Logo } from "../Logo";
import { CopyRight, InnerFooter, SocialLinks } from "./styled";

export default function Footer({ isMobile }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <InnerFooter>
        <CopyRight>
          &copy; {currentYear}
          <span className="half-text">lhvk</span>
        </CopyRight>
        <Logo
          isHomePage={true}
          isMobile={isMobile}
        />
        <SocialLinks $isMobile={isMobile}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer">
            <Icon id="facebook-icon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer">
            <Icon id="instagram-icon" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer">
            <Icon id="twitter-icon" />
          </a>
        </SocialLinks>
      </InnerFooter>
    </footer>
  );
}
