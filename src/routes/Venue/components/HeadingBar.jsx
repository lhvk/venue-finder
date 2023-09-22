import { NavLink } from "react-router-dom";
import { StarRating } from "../../../components/StarRating";
import {
  EditVenueContainer,
  VenueLocation,
  VenueOwner,
  VenueOwnerImage,
  VenuePrice,
  VenueTitle,
} from "../styled";
import { Icon } from "../../../components/Icon";
import { PLACEHOLDER_PROFILE_IMG } from "../../../config";

export function HeadingBar({ venue, name }) {
  const canEditVenue = name === venue.owner?.name;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
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
          {venue.location?.address}, {venue.location?.zip}{" "}
          {venue.location?.city}, {venue.location?.country}
        </VenueLocation>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <StarRating
            ratingAverage={venue.rating}
            totalReviews={venue.rating ?? Math.random(1, 20)}
            textColor="var(--clr-dark)"
          />
        </div>
      </div>
      <VenueOwner>
        <VenueOwnerImage
          src={venue.owner?.avatar || PLACEHOLDER_PROFILE_IMG}
          alt={venue.owner?.name}
        />
        <div>{venue.owner?.name}</div>
      </VenueOwner>
      <VenuePrice>
        <span className="price">{venue.price} NOK </span>per night
      </VenuePrice>
    </div>
  );
}
