import { Email, ProfileInfo } from "../styled";

export function ProfileInformation({ userName, email, venueManager }) {
  return (
    <ProfileInfo>
      <h1>{userName}</h1>
      <Email>{email}</Email>
      <p>Current plan: {venueManager ? "Venue Manager" : "Customer"}</p>
    </ProfileInfo>
  );
}
