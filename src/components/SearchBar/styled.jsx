import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { MOBILE } from "../../config";

export const SearchContainer = styled.div`
  opacity: 0.8;
  display: flex;
  align-items: center;
  background: var(--clr-white);
  padding-left: 8px;
  border-radius: 15px;
  width: 100%;

  &:focus-within {
    opacity: 1;
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
  overflow: hidden;
  width: 100%;
  background-color: var(--clr-white);
  border-radius: 15px;
  padding: 12.5px;
  position: absolute;
  top: 240px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 99999;

  @media (${MOBILE}) {
    top: 210px;
  }
`;

export const ResultItem = styled.li`
  color: var(--clr-dark);
  text-align: left;
  cursor: pointer;
  padding-block: 8px;

  &:hover {
    background-color: var(--clr-grey);
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
  color: var(--clr-dark);
  text-align: left;
`;
