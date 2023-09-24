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

export function VenueManager({
  userData,
  isSubmitting,
  setUserData,
  setIsSubmitting,
  isLoading,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const closeBookingsModal = () => setIsModalOpen(false);
  const openBookingsModal = () => setIsModalOpen(true);
  const closeConfirmModal = () => setIsConfirmModalOpen(false);
  const openConfirmModal = () => setIsConfirmModalOpen(true);

  return (
    <>
      <h2>Your venues</h2>

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
                    onClick={openBookingsModal}>
                    View bookings
                  </LinkButton>
                </div>
              </Container>
              <ButtonsContainer>
                <DeleteButton
                  onClick={openConfirmModal}
                  buttonTitle="Delete venue"
                />

                {isConfirmModalOpen && (
                  <ConfirmModal
                    modalTitle={venue.name}
                    isSubmitting={isSubmitting}
                    onClick={() =>
                      handleDelete(venue.id, setUserData, setIsSubmitting)
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

      {isModalOpen &&
        userData?.venues.map((venue, i) => (
          <React.Fragment key={i}>
            <Modal
              infoOnly={true}
              modalTitle={venue.name}
              closeModal={closeBookingsModal}>
              <>
                <h3>Upcoming bookings</h3>
                {userData._count.bookings === 0 ? (
                  <p>You have no upcoming bookings on this venue..</p>
                ) : (
                  userData.bookings.map((booking) => {
                    return (
                      <ul key={booking.id}>
                        <li>{booking.name}</li>
                      </ul>
                    );
                  })
                )}
              </>
            </Modal>
          </React.Fragment>
        ))}
    </>
  );
}
