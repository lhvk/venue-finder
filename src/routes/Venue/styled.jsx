import { styled } from "styled-components";
import { MOBILE, TABLET } from "../../config";

export const VenueMain = styled.div`
  padding: 20px;
`;

export const VenueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 768px;
  gap: 20px;
  margin: auto;
  width: 100%;
`;
export const VenueImgContainer = styled.div`
  border-radius: 10px;
  max-width: 768px;
  max-height: 768px;
`;

export const VenueImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  aspect-ratio: 4/3;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MaxGuestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MaxGuests = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CreatedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const VenueTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditVenueContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: inherit;
`;

export const VenueLocation = styled.div`
  display: flex;
  align-items: center;
`;

export const VenueOwner = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: bold;
`;
export const VenueOwnerImage = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const VenuePrice = styled.div`
  margin-top: auto;

  & .price {
    font-size: 2.2rem;
    font-weight: bold;

    @media (${TABLET}) {
      font-size: 1.8rem;
    }
    @media (${MOBILE}) {
      font-size: 1.6rem;
    }
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  padding: 10px;
`;

export const Arrow = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const ImageIndex = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--clr-white);
  border-radius: 0 0 10px 10px;
`;

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;

  @media (${(props) =>
      props.$isVenueManager || props.$isUnregistered ? TABLET : MOBILE}) {
    grid-template-columns: 1fr;
  }
`;
