import { toast } from "react-toastify";
import { BOOKINGS_URL, VENUE_URL } from "../config";

export async function deleteEntry(
  id,
  token,
  isVenueManager,
  setIsSubmitting,
  closeModal
) {
  try {
    setIsSubmitting(true);
    const response = await fetch(
      `${isVenueManager ? VENUE_URL : BOOKINGS_URL}/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error deleting entry: ${response.status}`);
    }

    toast.success(`Entry has been deleted.`, { position: "bottom-right" });
  } catch (error) {
    toast.error(`${error}`, { position: "bottom-right" });
  } finally {
    closeModal();
    setIsSubmitting(false);
  }
}
