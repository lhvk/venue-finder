import { NavLink } from "react-router-dom";
import { Button } from "../../../components/Buttons";
import { StarRating } from "../../../components/StarRating";
import { EditVenueContainer, VenueLocation, VenueTitle } from "../styled";
import { Icon } from "../../../components/Icon";

export function HeadingBar({
  venue,
  openModal,
  accessToken,
  isVenueManager,
  name,
}) {
  const canEditVenue = name === venue.owner?.name;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <StarRating
          ratingAverage={venue.rating}
          totalReviews={venue.rating ?? Math.random(1, 20)}
          textColor="var(--clr-dark)"
        />
        {!isVenueManager && (
          <Button onClick={openModal}>
            {accessToken ? "Book this venue" : "View available dates"}
          </Button>
        )}
      </div>
      <VenueTitle>
        <h1>{venue.name}</h1>
        {canEditVenue && (
          <NavLink to={`/edit-venue/${venue.id}`}>
            <EditVenueContainer>
              <Icon id="edit-icon" />
              Edit venue
            </EditVenueContainer>
          </NavLink>
        )}
      </VenueTitle>
      <VenueLocation>
        <Icon id="location-icon" />
        {venue.location?.address}, {venue.location?.zip} {venue.location?.city},{" "}
        {venue.location?.country}
      </VenueLocation>
    </div>
  );
}
