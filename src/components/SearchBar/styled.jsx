import { styled } from "styled-components";
import { MOBILE } from "../../config";
import { Link } from "react-router-dom";

export const SearchContainer = styled.div`
  opacity: 0.8;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  padding-left: 8px;
  border-radius: 15px;
  width: ${(props) => (props.$isTablet ? "480px" : "600px")};

  &:focus-within {
    opacity: 1;
  }

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

export const ResultsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12.5px;
  overflow: hidden;
  width: ${(props) => (props.$isTablet ? "480px" : "600px")};
  opacity: 0.8;
  background-color: var(--clr-white);
  border-radius: 15px;
  padding: 12.5px;
  position: absolute;
  top: 240px;
  z-index: 99999;

  &:focus-within,
  &:hover {
    opacity: 1;
  }
`;

export const ResultItem = styled.li`
  color: var(--clr-text);
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Flag = styled.img`
  width: 24px;
`;

export const VenueLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NoResults = styled.span`
  color: var(--clr-text);
  text-align: left;
`;
