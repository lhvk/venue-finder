import { EditButton } from "../../../components/Buttons";
import { Email, ProfileInfo } from "../styled";

export function ProfileInformation({
  userName,
  email,
  venueManager,
  openAvatarModal,
}) {
  return (
    <ProfileInfo>
      <div>
        <h1>
          {userName} ({venueManager ? "Venue Manager" : "Customer"})
        </h1>
        <Email>{email}</Email>
      </div>
      <div>
        <EditButton
          buttonTitle="Edit avatar"
          onClick={openAvatarModal}>
          Edit avatar
        </EditButton>
      </div>
    </ProfileInfo>
  );
}
