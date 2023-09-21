import { BOOKINGS_URL, VENUE_URL } from "../config";

export async function deleteEntry(id, token, isVenue) {
  try {
    const response = await fetch(
      `${isVenue ? VENUE_URL : BOOKINGS_URL}/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error deleting entry with ID ${id}: ${response.status}`);
    }

    console.log(`Entry with ID ${id} has been deleted.`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
