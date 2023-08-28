import { FiveStars } from "./FiveStars";
import { HeroBanner, HeroLogo, HeroHeading } from "./styled";

export default function Hero({ children }) {
  return (
    <HeroBanner>
      <div className="hero-overlay">
        <div className="hero-content">
          <HeroLogo>
            <HeroHeading>
              venue<span className="half-text">Finder</span>
            </HeroHeading>
            <span className="logo-slogan">home anywhere</span>
          </HeroLogo>

          <i>
            <q>The number one venue finder in the world</q>
          </i>
          <FiveStars />
          {children}
        </div>
      </div>
    </HeroBanner>
  );
}
