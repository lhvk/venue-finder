import { deleteEntry } from "../../api/delete";
import { getLocalStorageItem } from "../../utils/localStorageUtils";

export async function handleDelete(entryId, setUserData) {
  const { accessToken: token, venueManager: isVenue } =
    getLocalStorageItem("user");

  if (
    window.confirm(
      `Are you sure you want to delete this ${isVenue ? "venue" : "booking"}?`
    )
  ) {
    try {
      await deleteEntry(entryId, token, isVenue);

      setUserData((prevUserData) => {
        if (isVenue) {
          // If it's a venue, filter the venues array
          return {
            ...prevUserData,
            venues: prevUserData.venues.filter((venue) => venue.id !== entryId),
          };
        }

        return {
          ...prevUserData,
          bookings: prevUserData.bookings.filter(
            (booking) => booking.id !== entryId
          ),
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
}
