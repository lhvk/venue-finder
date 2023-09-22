import { getRelativeTime } from "../../../utils/dateUtils";
import { CreatedContainer } from "../styled";

export function VenueDateTimeInfo({ venue }) {
  return (
    <CreatedContainer>
      <div>
        <h4>Created</h4>
        <p>{getRelativeTime(venue.created)}</p>
      </div>
      <div>
        <h4>Updated</h4>
        <p>{getRelativeTime(venue.updated)}</p>
      </div>
    </CreatedContainer>
  );
}
