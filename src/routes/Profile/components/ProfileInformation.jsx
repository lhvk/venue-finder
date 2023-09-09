import { ProfileInfo } from "../styled";

export function ProfileInformation({ userName, email, venueManager }) {
  return (
    <ProfileInfo>
      <h1>{userName}</h1>
      <p>{email}</p>
      <p>Current plan: {venueManager ? "Venue Manager" : "Customer"}</p>
    </ProfileInfo>
  );
}
