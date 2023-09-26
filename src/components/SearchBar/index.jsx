import React, { useState } from "react";
import {
  Flag,
  NoResults,
  ResultItem,
  ResultsContainer,
  SearchContainer,
  SearchInput,
  VenueLink,
} from "./styled";
import { Icon } from "../Icon";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { TABLET, VENUE_URL } from "../../config";
import { getAltText, getFlag } from "../../utils/countryCodeUtils";
import { searchHandler } from "./searchHandler";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchResult, setSearchResult] = useState({
    query: "",
    list: [],
  });
  const [selectedItem, setSelectedItem] = useState(-1);
  const { data: venues } = useFetch(VENUE_URL);
  const isTablet = useMediaQuery(TABLET);

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" && selectedItem > 0) {
      setSelectedItem((prev) => prev - 1);
    }
    if (e.key === "ArrowDown" && selectedItem < searchResult.list.length - 1) {
      setSelectedItem((prev) => prev + 1);
    }
    if (e.key === "Enter" && selectedItem >= 0) {
      const selectedVenue = searchResult.list[selectedItem];
      navigate(`/venue/${selectedVenue.id}`);
    }
  };

  return (
    <>
      <SearchContainer $isTablet={isTablet}>
        <Icon id="search-icon" />
        <SearchInput
          type="search"
          placeholder="Search for venues..."
          value={searchResult.query}
          onChange={searchHandler(venues, setSearchResult)}
          onKeyDown={handleKeyDown}
        />
      </SearchContainer>
      {searchResult.query && (
        <ResultsContainer $isTablet={isTablet}>
          {searchResult.list.length > 0 ? (
            searchResult.list.map((ven, index) => {
              return (
                <ResultItem
                  key={index}
                  className={selectedItem === index ? "active-list-item" : ""}>
                  <VenueLink to={`/venue/${ven.id}`}>
                    <Flag
                      src={getFlag(ven.location?.country)}
                      alt={getAltText(ven.location?.country)}
                    />
                    {ven.name}
                  </VenueLink>
                </ResultItem>
              );
            })
          ) : (
            <NoResults>No results...</NoResults>
          )}
        </ResultsContainer>
      )}
    </>
  );
}
