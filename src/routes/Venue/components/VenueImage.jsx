import { NavLink } from "react-router-dom";
import { PLACEHOLDER_IMG } from "../../../config";
import { EditVenueContainer, VenueImg, VenueImgContainer } from "../styled";
import { Icon } from "../../../components/Icon";

export function VenueImage({ venue, name }) {
  const canEditVenue = name === venue.owner?.name;
  return (
    <VenueImgContainer>
      <VenueImg
        src={venue.media?.[0] || PLACEHOLDER_IMG}
        alt={venue.name}
      />

      {canEditVenue && (
        <NavLink to={`/edit-venue/${venue.id}`}>
          <EditVenueContainer>
            <Icon id="edit-icon" />
            Edit venue
          </EditVenueContainer>
        </NavLink>
      )}
    </VenueImgContainer>
  );
}
