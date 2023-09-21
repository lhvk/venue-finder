import { NavLink } from "react-router-dom";
import { PLACEHOLDER_IMG } from "../../../config";
import {
  ButtonsContainer,
  UserVenueThumbnail,
  UserVenuesList,
  Container,
} from "../styled";
import { DeleteButton } from "../../../components/Buttons/DeleteButton";
import { Icon } from "../../../components/Icon";
import { ActionsButton } from "../../../components/Buttons";
import { Modal } from "../../../components/Modal";
import { useState } from "react";
import { handleDelete } from "../../../handlers";
import { formatDate } from "../../../utils/dateUtils";

export function UserVenues({ userData, setUserData, isVenueManager }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeBookingsModal = () => setIsModalOpen(false);
  const openBookingsModal = () => setIsModalOpen(true);

  console.log(userData);

  return (
    <>
      <h2>Upcoming bookings</h2>
      {!isVenueManager && userData?.bookings?.length === 0 && (
        <p>You have no upcoming bookings...</p>
      )}
      <ul>
        {isVenueManager &&
          userData?.venues?.map((venue) => (
            <UserVenuesList key={venue.id}>
              <Container>
                <NavLink to={`/venue/${venue.id}`}>
                  <UserVenueThumbnail
                    src={venue.media[0] || PLACEHOLDER_IMG}
                    alt={venue.name}
                  />
                </NavLink>
                <div>
                  <h4>{venue.name}</h4>
                  <p>Bookings: {userData._count.bookings}</p>
                  <ActionsButton onClick={openBookingsModal}>
                    View bookings
                  </ActionsButton>
                </div>
              </Container>
              <ButtonsContainer>
                <DeleteButton
                  onClick={() => handleDelete(venue.id, setUserData, userData)}
                  buttonTitle="Delete venue"
                />

                <NavLink to={`/edit-venue/${venue.id}`}>
                  <Icon id="edit-icon" />
                </NavLink>
              </ButtonsContainer>
            </UserVenuesList>
          ))}

        {!isVenueManager &&
          userData?.bookings?.map((booking) => (
            <UserVenuesList key={booking.id}>
              <Container>
                <NavLink to={`/venue/${booking.id}`}>
                  <UserVenueThumbnail
                    src={booking.venue.media[0] || PLACEHOLDER_IMG}
                    alt={booking.name}
                  />
                </NavLink>
                <div>
                  <h4>{booking.venue.name}</h4>
                  <p>
                    {formatDate(booking.dateFrom, "dd MMM yyyy")} -{" "}
                    {formatDate(booking.dateTo, "dd MMM yyyy")}
                  </p>
                </div>
              </Container>
              <ButtonsContainer>
                <DeleteButton
                  onClick={() => handleDelete(booking.id, setUserData)}
                  buttonTitle="Delete venue"
                />
              </ButtonsContainer>
            </UserVenuesList>
          ))}
      </ul>

      {isModalOpen &&
        isVenueManager &&
        userData?.venues.map((venue) => (
          <Modal
            infoOnly={true}
            modalTitle={venue.name}
            closeModal={closeBookingsModal}>
            <>
              <h3>Upcoming bookings</h3>
              {userData._count.bookings === 0 ? (
                <p>You have no upcoming bookings..</p>
              ) : (
                userData.bookings.map((booking) => {
                  return (
                    <ul>
                      <li>{booking.name}</li>
                    </ul>
                  );
                })
              )}
            </>
          </Modal>
        ))}
    </>
  );
}
