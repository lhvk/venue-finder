import { Card } from "../../components/Card";
import Hero from "../../components/Hero";
import { Loader } from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import { BASE_URL } from "../../config";
import { useFetch } from "../../hooks/useFetch";
import { StyledSection } from "./styled";

export default function Home() {
  const { data: venues, isLoading, isError } = useFetch(BASE_URL + "venues");

  return (
    <main>
      <Hero children={<SearchBar />} />
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
