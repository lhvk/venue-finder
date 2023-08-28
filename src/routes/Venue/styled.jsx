import { styled } from "styled-components";

export const VenueMain = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const VenueContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
`;
export const VenueImgContainer = styled.div`
  max-width: 600px;
`;

export const VenueImg = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  min-width: 300px;
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
  flex-wrap: wrap;
  gap: 10px;
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Line = styled.hr`
  width: 100%;
  border-style: solid;
  border-width: 0.5px;
  opacity: 0.2;
`;
