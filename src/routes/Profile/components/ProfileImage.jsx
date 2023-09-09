import { Icon } from "../../../components/Icon";
import {
  Avatar,
  AvatarContainer,
  EditButton,
  EditButtonContainer,
} from "../styled";

export function ProfileImage({ avatar, userName, openAvatarModal }) {
  return (
    <AvatarContainer>
      <Avatar
        src={avatar}
        alt={`${userName}'s avatar`}
      />
      <EditButtonContainer>
        <EditButton onClick={openAvatarModal}>
          <Icon id="edit-icon" /> Edit avatar
        </EditButton>
      </EditButtonContainer>
    </AvatarContainer>
  );
}
