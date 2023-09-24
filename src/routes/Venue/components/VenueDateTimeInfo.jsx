import { getRelativeTime } from "../../../utils/dateUtils";
import { CreatedContainer } from "../styled";

export function VenueDateTimeInfo({ venue }) {
  return (
    <CreatedContainer>
      <div>
        <h3>Created</h3>
        <p>{getRelativeTime(venue.created)}</p>
      </div>
      <div>
        <h3>Updated</h3>
        <p>{getRelativeTime(venue.updated)}</p>
      </div>
    </CreatedContainer>
  );
}
