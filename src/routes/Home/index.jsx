import { useState } from "react";
import { Card } from "../../components/Card";
import Hero from "../../components/Hero";
import { Loader } from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import { VENUE_URL } from "../../config";
import { useFetch } from "../../hooks/useFetch";
import { StyledSection } from "./styled";

export default function Home() {
  const { data: venues, isLoading, isError } = useFetch(VENUE_URL);
  const [searchResult, setSearchResult] = useState({
    query: "",
    list: [],
  });

  return (
    <main>
      <Hero
        children={
          <SearchBar
            setSearchResult={setSearchResult}
            searchResult={searchResult}
            venues={venues}
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
