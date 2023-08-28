import { styled } from "styled-components";
import image from "../../assets/cottage200kb.jpg";

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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    padding: 10px;
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
  }
  .half-text {
    color: var(--clr-primary);
  }

  .logo-slogan {
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }
`;

export const StarContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 8px;
`;
