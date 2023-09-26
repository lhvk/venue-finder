import { styled } from "styled-components";

export const CardSection = styled.section`
  max-width: 1920px;
  margin: auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  max-width: 100%;
  margin: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 20px;
`;
