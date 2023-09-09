import { Button, ButtonNavLink } from "../../../components/Buttons";

export function UpgradeCreateButtons({ venueManager, openManagerModal }) {
  return (
    <>
      {venueManager ? (
        <ButtonNavLink to="/create-venue">Create venue</ButtonNavLink>
      ) : (
        <>
          <p>To create venues - Upgrade to Venue Manager</p>
          <Button onClick={openManagerModal}>Upgrade</Button>
        </>
      )}
    </>
  );
}
