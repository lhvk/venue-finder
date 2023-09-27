import { Card } from "../../components/Card";
import Hero from "../../components/Hero";
import { Loader } from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import { VENUE_URL } from "../../config";
import { ButtonContainer, CardSection, GridContainer } from "./styled";
import { useFetchWithPagination } from "../../hooks/useFetchWithPagination";
import { Button } from "../../components/Buttons/Button";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const {
    venuesData: data,
    isLoading,
    isError,
    loadMoreData,
  } = useFetchWithPagination(VENUE_URL);

  return (
    <main>
      <Helmet title="Venue Finder | Home" />
      <Hero children={<SearchBar />} />
      <CardSection>
        {isLoading && <Loader message={"venues"} />}
        <GridContainer>
          {isError && <p>An error has occurred...</p>}

          {data.map((venue) => (
            <Card
              key={venue.id}
              id={venue.id}
              bgImage={venue.media[0]}
              subtitle={venue.description}
              title={venue.name}
              ratingAverage={venue.rating}
              totalReviews={venue.rating ?? Math.random(1, 20)}
              tag={venue.location.country || "Norway"}
            />
          ))}
        </GridContainer>
      </CardSection>
      <ButtonContainer>
        <Button onClick={loadMoreData}>More results...</Button>
      </ButtonContainer>
    </main>
  );
}
