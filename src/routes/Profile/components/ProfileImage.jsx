import { PLACEHOLDER_PROFILE_IMG } from "../../../config";
import { Avatar, AvatarContainer } from "../styled";

export function ProfileImage({ avatar, userName }) {
  return (
    <AvatarContainer>
      <Avatar
        src={avatar || PLACEHOLDER_PROFILE_IMG}
        alt={`${userName}'s avatar`}
      />
    </AvatarContainer>
  );
}
