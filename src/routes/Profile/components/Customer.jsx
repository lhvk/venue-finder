import React, { useState } from "react";
import {
  ButtonsContainer,
  Container,
  UserVenueThumbnail,
  UserVenuesList,
  UserVenuesListItem,
} from "../styled";
import { NavLink } from "react-router-dom";
import { formatDate } from "../../../utils/dateUtils";
import { DeleteButton } from "../../../components/Buttons";
import { Modal as ConfirmModal } from "../../../components/Modal";
import { handleDelete } from "../../../handlers";
import { Line } from "../../../components/Line";
import { PLACEHOLDER_IMG } from "../../../config";
import { Loader } from "../../../components/Loader";

export function Customer({
  userData,
  isSubmitting,
  setUserData,
  setIsSubmitting,
  isLoading,
}) {
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const closeConfirmModal = () => setIsConfirmModalOpen(false);
  const openConfirmModal = () => setIsConfirmModalOpen(true);

  return (
    <>
      <h2>Upcoming bookings</h2>

      {isLoading && <Loader message={"your bookings"} />}

      {!isLoading && userData?.bookings?.length === 0 && (
        <p>You have no upcoming bookings...</p>
      )}

      <UserVenuesList>
        {userData?.bookings?.map((booking) => (
          <React.Fragment key={booking.id}>
            <UserVenuesListItem>
              <Container>
                <NavLink to={`/venue/${booking.venue.id}`}>
                  <UserVenueThumbnail
                    src={booking.venue.media[0] || PLACEHOLDER_IMG}
                    alt={booking.name}
                  />
                </NavLink>
                <div>
                  <h3>{booking.venue.name}</h3>
                  <p>
                    {formatDate(booking.dateFrom, "dd MMM yyyy")} -{" "}
                    {formatDate(booking.dateTo, "dd MMM yyyy")}
                  </p>
                </div>
              </Container>
              <ButtonsContainer>
                <DeleteButton
                  onClick={openConfirmModal}
                  buttonTitle="Delete venue"
                />

                {isConfirmModalOpen && (
                  <ConfirmModal
                    isSubmitting={isSubmitting}
                    onClick={() =>
                      handleDelete(booking.id, setUserData, setIsSubmitting)
                    }
                    closeModal={closeConfirmModal}
                    modalTitle={`Delete ${booking.venue.name}`}>
                    Are you sure you want to delete this booking?
                  </ConfirmModal>
                )}
              </ButtonsContainer>
            </UserVenuesListItem>
            <Line />
          </React.Fragment>
        ))}
      </UserVenuesList>
    </>
  );
}
