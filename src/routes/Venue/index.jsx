import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { VENUE_URL } from "../../config";
import { Loader } from "../../components/Loader";
import {
  VenueContainer,
  VenueMain,
  FeaturesContainer,
  Container,
  Line,
} from "./styled";
import {
  LocationInfo,
  MaxGuestsInfo,
  MetaFeatures,
  VenueDateTimeInfo,
  VenueImage,
} from "./components";
import { getLocalStorageItem } from "../../utils/localStorageUtils";

export default function Venue() {
  const { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = useFetch(`${VENUE_URL}/${id}?_bookings=true&_owner=true`);

  const user = getLocalStorageItem("user");

  const { accessToken, name, venueManager: isVenueManager } = user || {};

  if (isLoading) {
    return <Loader message={"venue"} />;
  }

  if (isError) return <p>an error occured..</p>;

  return (
    <VenueMain>
      <VenueContainer>
        <Container>
          <VenueImage venue={venue} />
          <FeaturesContainer>
            <VenueDateTimeInfo venue={venue} />
            <Line />
            <MetaFeatures
              isLoading={isLoading}
              isError={isError}
              venue={venue}
            />
            <Line />
            <MaxGuestsInfo venue={venue} />
            <Line />
            <LocationInfo venue={venue} />
          </FeaturesContainer>
        </Container>
      </VenueContainer>
    </VenueMain>
  );
}
