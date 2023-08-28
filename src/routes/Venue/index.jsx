import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { BASE_URL } from "../../config";
import { Loader } from "../../components/Loader";
import { FeatureListItem } from "../../components/FeatureListItem";
import { getRelativeTime } from "../../utils/dateUtils";
import {
  VenueImgContainer,
  VenueImg,
  VenueContainer,
  VenueMain,
  MaxGuests,
  List,
  FeaturesContainer,
  MaxGuestsContainer,
  CreatedContainer,
  Container,
  Line,
} from "./styled";
import { Icon } from "../../components/Icon";

export default function Venue() {
  const { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = useFetch(BASE_URL + `venues/${id}`);

  if (isLoading) {
    return <Loader message={"venue"} />;
  }

  if (isError) return <p>an error occured..</p>;

  if (!isLoading && !isError && venue && venue.meta) {
    const { meta } = venue;
    const metaFeaturesArray = Object.keys(meta).map((featureKey) => ({
      featureName: featureKey,
      hasFeature: meta[featureKey],
    }));

    return (
      <VenueMain>
        <VenueContainer>
          <Container>
            <VenueImgContainer>
              <VenueImg
                src={venue.media?.[0]}
                alt={venue.name}
              />
              <h1>{venue.name}</h1>

              <h2>Description:</h2>
              <article>{venue.description}</article>
            </VenueImgContainer>

            <FeaturesContainer>
              <CreatedContainer>
                <div>
                  <h4>Created:</h4>
                  <p>{getRelativeTime(venue.created)}</p>
                </div>
                <div>
                  <h4>Updated:</h4>
                  <p>{getRelativeTime(venue.updated)}</p>
                </div>
              </CreatedContainer>
              <Line />
              <List>
                <h4>Included:</h4>
                {metaFeaturesArray.map((feature) => (
                  <FeatureListItem
                    key={feature.featureName}
                    featureName={feature.featureName}
                    hasFeature={feature.hasFeature}
                  />
                ))}
              </List>
              <Line />
              <MaxGuestsContainer>
                <h4>Max Guests:</h4>
                <MaxGuests>
                  <Icon
                    id="people-icon"
                    height="24px"
                    width="24px"
                  />
                  {venue.maxGuests}
                </MaxGuests>
              </MaxGuestsContainer>
              <Line />
              <div>
                <h3>Location:</h3>
                <p>Address: {venue.location.address}</p>
                <p>City: {venue.location.city}</p>
                <p>Continent: {venue.location.continent}</p>
                <p>Country: {venue.location.country}</p>
                <p>Latitude: {venue.location.lat}</p>
                <p>Longitude: {venue.location.lng}</p>
                <p>ZIP: {venue.location.zip}</p>
              </div>
            </FeaturesContainer>
          </Container>
        </VenueContainer>
      </VenueMain>
    );
  }
}
