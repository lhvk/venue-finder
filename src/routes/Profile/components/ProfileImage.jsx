import { EditButton } from "../../../components/Buttons/EditButton";
import { Avatar, AvatarContainer } from "../styled";

export function ProfileImage({ avatar, userName, openAvatarModal }) {
  return (
    <AvatarContainer>
      <Avatar
        src={avatar}
        alt={`${userName}'s avatar`}
      />
      <div>
        <EditButton
          buttonTitle="Edit avatar"
          onClick={openAvatarModal}>
          Edit avatar
        </EditButton>
      </div>
    </AvatarContainer>
  );
}
