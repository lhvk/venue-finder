import { styled } from "styled-components";
import { MOBILE } from "../../config";

export const SearchContainer = styled.div`
  opacity: 0.8;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  padding-left: 8px;
  border-radius: 15px;
  width: ${(props) => (props.$isTablet ? "480px" : "600px")};

  @media (${MOBILE}) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  background: var(--clr-white);
  border: none;
  width: 100%;
  outline: none;
  border-radius: 0 15px 15px 0;
  padding: 15px 8px 15px 8px;
`;
