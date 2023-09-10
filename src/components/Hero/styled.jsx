import { styled } from "styled-components";
import image from "../../assets/cottage200kb.jpg";
import { MOBILE } from "../../config";

export const HeroBanner = styled.div`
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-white);

  & .hero-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  & .hero-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    margin-inline: 10px;
    max-width: 480px;
    width: 100%;
  }
`;

export const HeroHeading = styled.h1`
  color: var(--clr-white);
`;

export const HeroLogo = styled.div`
  h1 {
    font-size: 6.2rem;
    line-height: 1;

    @media (${MOBILE}) {
      font-size: 4.2rem;
    }
  }
  .half-text {
    color: var(--clr-pink);
  }

  .logo-slogan {
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;

    @media (${MOBILE}) {
      font-size: 1.4rem;
    }
  }
`;

export const StarContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 8px;
`;
