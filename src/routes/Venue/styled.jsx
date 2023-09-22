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
  font-size: 1.2rem;
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
  }
`;

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;

  @media (${MOBILE}) {
    grid-template-columns: 1fr;
  }
`;
