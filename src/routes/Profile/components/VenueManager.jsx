import React, { useState } from "react";
import {
  ButtonsContainer,
  Container,
  UserVenueThumbnail,
  UserVenuesList,
  UserVenuesListItem,
} from "../styled";
import { NavLink } from "react-router-dom";
import { DeleteButton, LinkButton } from "../../../components/Buttons";
import { Modal as ConfirmModal, Modal } from "../../../components/Modal";
import { Icon } from "../../../components/Icon";
import { Line } from "../../../components/Line";
import { handleDelete } from "../../../handlers";
import { PLACEHOLDER_IMG } from "../../../config";
import { Loader } from "../../../components/Loader";
import { VenueBookings } from "./VenueBookings";

export function VenueManager({
  userData,
  isSubmitting,
  setUserData,
  setIsSubmitting,
  isLoading,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState({});

  const closeBookingsModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const openBookingsModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  function handleVenueClick(venue, openModal) {
    setSelectedVenue(venue);
    openModal();
  }

  return (
    <>
      <h2 style={{ marginBottom: "10px" }}>Your venues</h2>
      {isLoading && <Loader message={"your venues"} />}
      {!isLoading && userData?._count?.venues === 0 && (
        <p>You have no venues...</p>
      )}
      <UserVenuesList>
        {userData?.venues?.map((venue) => (
          <React.Fragment key={venue.id}>
            <UserVenuesListItem>
              <Container>
                <NavLink to={`/venue/${venue.id}`}>
                  <UserVenueThumbnail
                    src={venue.media?.[0] || PLACEHOLDER_IMG}
                    alt={venue.name}
                  />
                </NavLink>
                <div>
                  <h3>{venue.name}</h3>

                  <LinkButton
                    color="var(--clr-dark)"
                    onClick={() => handleVenueClick(venue, openBookingsModal)}>
                    View bookings
                  </LinkButton>
                </div>
              </Container>

              <ButtonsContainer>
                <DeleteButton
                  onClick={() => handleVenueClick(venue, openConfirmModal)}
                  buttonTitle="Delete venue"
                />

                {isConfirmModalOpen && (
                  <ConfirmModal
                    modalTitle={selectedVenue.name}
                    isSubmitting={isSubmitting}
                    onClick={() =>
                      handleDelete(
                        selectedVenue.id,
                        setUserData,
                        setIsSubmitting,
                        closeConfirmModal
                      )
                    }
                    closeModal={closeConfirmModal}>
                    Are you sure you want to delete this venue?
                  </ConfirmModal>
                )}

                <NavLink to={`/edit-venue/${venue.id}`}>
                  <Icon id="edit-icon" />
                </NavLink>
              </ButtonsContainer>
            </UserVenuesListItem>
            <Line />
          </React.Fragment>
        ))}
      </UserVenuesList>

      {isModalOpen && (
        <React.Fragment key={selectedVenue.id}>
          <Modal
            infoOnly={true}
            modalTitle={selectedVenue.name}
            closeModal={closeBookingsModal}>
            <VenueBookings venueId={selectedVenue.id} />
          </Modal>
        </React.Fragment>
      )}
    </>
  );
}
