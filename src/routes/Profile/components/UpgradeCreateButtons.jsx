import { ButtonNavLink, LinkButton } from "../../../components/Buttons";

export function UpgradeCreateButtons({ venueManager, openManagerModal }) {
  return (
    <>
      {venueManager ? (
        <div style={{ marginTop: "20px" }}>
          <ButtonNavLink to="/create-venue">Create venue</ButtonNavLink>
        </div>
      ) : (
        <div>
          To create venues{" "}
          <LinkButton onClick={openManagerModal}>upgrade</LinkButton> to Venue
          Manager
        </div>
      )}
    </>
  );
}
