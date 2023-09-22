import { Avatar, AvatarContainer } from "../styled";

export function ProfileImage({ avatar, userName }) {
  return (
    <AvatarContainer>
      <Avatar
        src={avatar}
        alt={`${userName}'s avatar`}
      />
    </AvatarContainer>
  );
}
