import { Loader } from "../../../components/Loader";
import { VENUE_URL } from "../../../config";
import { useFetch } from "../../../hooks/useFetch";
import { formatDate } from "../../../utils/dateUtils";

export function VenueBookings({ venueId }) {
  const {
    data: selectedVenue,
    isLoading,
    isError,
  } = useFetch(`${VENUE_URL}/${venueId}?_bookings=true`);

  return (
    <>
      <h3>Upcoming bookings</h3>
      {isLoading && (
        <Loader
          message="bookings..."
          size={0.5}
        />
      )}

      {isError && (
        <p>Oops.. an error occured while trying fetching the bookings</p>
      )}

      {selectedVenue?.bookings?.length === 0 ? (
        <p>You have no upcoming bookings on this venue..</p>
      ) : (
        selectedVenue?.bookings?.map((booking) => {
          return (
            <ul>
              <li key={booking.id}>
                {formatDate(booking.dateFrom)} - {formatDate(booking.dateTo)}
              </li>
            </ul>
          );
        })
      )}
    </>
  );
}
