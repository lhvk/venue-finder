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
  color: #fff;

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
