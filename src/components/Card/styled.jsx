import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 330px;
  position: relative;
  background-image: linear-gradient(
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 0.2) 40%,
      rgba(0, 0, 0, 0.8) 80%
    ),
    url(${(props) => props.$bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 900;
  display: block;
  margin-bottom: 8px;
  color: var(--clr-white);
`;

export const Subtitle = styled.span`
  font-size: 14px;
  color: var(--clr-white);
`;

export const TagContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  background: linear-gradient(var(--clr-pink), var(--clr-primary));
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px;
  width: 80px;
  border-radius: 3px;
  text-align: center;
  color: var(--clr-white);
`;

export const ButtonContainer = styled.div`
  color: var(--clr-white);
`;

export const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: rgba(255, 255, 255, 50);

  & .total-reviews {
    margin-left: 8px;
  }
`;

export const CardVenueLink = styled(NavLink)`
  color: inherit;
  font-size: inherit;
  background: transparent;
  border: 1px solid ${"var(--clr-white)"};
  padding-inline: ${(props) => props.$px || "10px"};
  padding-block: ${(props) => props.$py || null};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;
