import { useState } from "react";
import { SearchContainer, SearchInput } from "./styled";
import { Icon } from "../Icon";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { TABLET } from "../../config";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const isTablet = useMediaQuery(TABLET);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <SearchContainer isTablet={isTablet}>
      <Icon id="search-icon" />
      <SearchInput
        type="text"
        placeholder="Search for venues..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </SearchContainer>
  );
}
