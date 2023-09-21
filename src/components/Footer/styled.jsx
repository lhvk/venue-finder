import styled from "styled-components";

export const InnerFooter = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
`;

export const CopyRight = styled.div`
  display: flex;
  align-items: center;
  color: var(--clr-white);
  font-size: 2rem;

  & .half-text {
    color: var(--clr-pink);
    font-weight: 600;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${(props) => (props.$isMobile ? "10px" : "20px")};
  align-items: center;

  & a:hover {
    opacity: 0.8;
  }
`;
