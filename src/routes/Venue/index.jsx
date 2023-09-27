import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { MOBILE, VENUE_URL } from "../../config";
import { Loader } from "../../components/Loader";
import {
  VenueContainer,
  VenueMain,
  FeaturesContainer,
  StyledSection,
} from "./styled";
import {
  HeadingBar,
  LocationInfo,
  MaxGuestsInfo,
  MetaFeatures,
  VenueDateTimeInfo,
  VenueImage,
  BookVenue,
  Description,
} from "./components";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { useMediaQuery } from "@mui/material";
import { Line } from "../../components/Line";
import { Helmet } from "react-helmet-async";

export default function Venue() {
  const { id } = useParams();
  const {
    data: venue,
    isLoading,
    isError,
  } = useFetch(`${VENUE_URL}/${id}?_bookings=true&_owner=true`);
  const isMobile = useMediaQuery(MOBILE);

  const user = getLocalStorageItem("user");

  const { accessToken, name, venueManager: isVenueManager } = user || {};

  if (isLoading) {
    return <Loader message={"venue"} />;
  }

  if (isError) return <p>an error occured..</p>;

  return (
    <VenueMain>
      <Helmet title={`Venue Finder | ${venue.name}`} />
      <VenueContainer>
        <VenueImage
          venue={venue}
          name={name}
        />
        <StyledSection
          $isVenueManager={isVenueManager}
          $isUnregistered={!accessToken}>
          <HeadingBar venue={venue} />
          <div>
            <BookVenue
              venue={venue}
              isVenueManager={isVenueManager}
              accessToken={accessToken}
            />
          </div>
        </StyledSection>
        <Line />
        <StyledSection>
          <Description
            venue={venue}
            isMobile={isMobile}
          />
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
        </StyledSection>
      </VenueContainer>
    </VenueMain>
  );
}
