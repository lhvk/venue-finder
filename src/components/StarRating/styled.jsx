import styled from "styled-components";

export const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  color: rgba(255, 255, 255, 50);

  & .total-reviews {
    color: ${(props) => props.$textColor || "var(--clr-white)"};
    margin-left: 8px;
  }
`;
