import { PLACEHOLDER_IMG } from "../../../config";
import { VenueImg, VenueImgContainer } from "../styled";

export function VenueImage({ venue }) {
  return (
    <VenueImgContainer>
      <VenueImg
        src={venue.media?.[0] || PLACEHOLDER_IMG}
        alt={venue.name}
      />
      <div>
        <h2>Description:</h2>
        <article>{venue.description}</article>
      </div>
    </VenueImgContainer>
  );
}
