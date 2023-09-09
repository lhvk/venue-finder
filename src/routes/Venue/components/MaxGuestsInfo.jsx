import { Icon } from "../../../components/Icon";
import { MaxGuests, MaxGuestsContainer } from "../styled";

export function MaxGuestsInfo({ venue }) {
  return (
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
  );
}
