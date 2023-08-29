import { useState } from "react";
import { Card } from "../../components/Card";
import Hero from "../../components/Hero";
import { Loader } from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import { BASE_URL } from "../../config";
import { useFetch } from "../../hooks/useFetch";
import { StyledSection } from "./styled";

export default function Home() {
  const { data: venues, isLoading, isError } = useFetch(BASE_URL + "venues");
  const [searchResult, setSearchResult] = useState({
    query: "",
    list: [],
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const results = venues.filter((venue) => {
      if (value === "") return venues;
      const name = venue.name.toLowerCase().includes(value.toLowerCase());
      const country = venue.location?.country
        .toLowerCase()
        .includes(value.toLowerCase());
      const city = venue.location?.city
        .toLowerCase()
        .includes(value.toLowerCase());
      return name || country || city;
    });
    setSearchResult({
      query: value,
      list: results,
    });
  };

  return (
    <main>
      <Hero
        children={
          <SearchBar
            searchResult={searchResult}
            onChange={handleChange}
          />
        }
      />
      <StyledSection>
        {isLoading && <Loader message={"venues"} />}
        {isError && <p>An error has occurred...</p>}

        {venues.map((venue) => (
          <Card
            key={venue.id}
            id={venue.id}
            bgImage={venue.media[0]}
            subtitle={venue.description}
            title={venue.name}
            ratingAverage={venue.rating}
            totalReviews={venue.rating ?? Math.random(1, 20)}
            tag={venue.location.country}
          />
        ))}
      </StyledSection>
    </main>
  );
}
