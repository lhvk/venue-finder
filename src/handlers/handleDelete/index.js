import { deleteEntry } from "../../api/delete";
import { getLocalStorageItem } from "../../utils/localStorageUtils";

export async function handleDelete(entryId, setUserData, setIsSubmitting) {
  const { accessToken: token, venueManager: isVenueManager } =
    getLocalStorageItem("user");

  try {
    await deleteEntry(entryId, token, isVenueManager, setIsSubmitting);

    setUserData((prevUserData) => {
      if (isVenueManager) {
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
