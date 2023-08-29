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
import { TABLET } from "../../config";
import { getAltText, getFlag } from "../../utils/countryCodeUtils";

export default function SearchBar({ searchResult, onChange }) {
  const isTablet = useMediaQuery(TABLET);

  return (
    <>
      <SearchContainer $isTablet={isTablet}>
        <Icon id="search-icon" />
        <SearchInput
          type="search"
          placeholder="Search for venues..."
          value={searchResult.query}
          onChange={onChange}
        />
      </SearchContainer>
      {searchResult.query && (
        <ResultsContainer $isTablet={isTablet}>
          {searchResult.list.length > 0 ? (
            searchResult.list.map((ven, i) => {
              return (
                <ResultItem>
                  <VenueLink
                    key={i}
                    to={`/venue/${ven.id}`}>
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
            <NoResults>
              No venue matches this query.. try a different query
            </NoResults>
          )}
        </ResultsContainer>
      )}
    </>
  );
}
