import { NavLink } from "react-router-dom";
import { deleteVenue } from "../../../api/delete";
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

export function UserVenues({ venueData, setVenueData, token, isVenueManager }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeBookingsModal = () => setIsModalOpen(false);
  const openBookingsModal = () => setIsModalOpen(true);

  async function handleDeleteVenue(venueId) {
    if (window.confirm("Are you sure you want to delete this venue?")) {
      try {
        await deleteVenue(venueId, token);

        setVenueData((prevData) => {
          return prevData.filter((venue) => venue.id !== venueId);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <h2>Upcoming bookings</h2>
      <ul>
        {venueData?.map((venue) => (
          <UserVenuesList key={venue.id}>
            <Container>
              <NavLink to={`/venue/${venue.id}`}>
                <UserVenueThumbnail
                  src={venue.img || PLACEHOLDER_IMG}
                  alt={venue.name}
                />
              </NavLink>
              <div>
                <h4>{venue.name}</h4>
                <p>Bookings: {venue.bookings.length}</p>
                <ActionsButton onClick={openBookingsModal}>
                  View bookings
                </ActionsButton>
              </div>
            </Container>
            <ButtonsContainer>
              <DeleteButton
                onClick={() => handleDeleteVenue(venue.id)}
                buttonTitle="Delete venue"
              />

              <NavLink to={`/edit-venue/${venue.id}`}>
                <Icon id="edit-icon" />
              </NavLink>
            </ButtonsContainer>
          </UserVenuesList>
        ))}
      </ul>
      {isModalOpen &&
        venueData?.map((venue) => (
          <Modal
            infoOnly={true}
            modalTitle={venue.name}
            closeModal={closeBookingsModal}
            children={
              <>
                <h3>Upcoming bookings</h3>
                {venue.bookings.length === 0 ? (
                  <p>You have no upcoming bookings..</p>
                ) : (
                  venue.bookings.map((booking) => {
                    return (
                      <ul>
                        <li>{booking.name}</li>
                      </ul>
                    );
                  })
                )}
              </>
            }
          />
        ))}
    </>
  );
}
