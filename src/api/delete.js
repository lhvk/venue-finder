import { VENUE_URL } from "../config";

export async function deleteVenue(id, token) {
  try {
    const response = await fetch(`${VENUE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error deleting venue with ID ${id}: ${response.status}`);
    }

    console.log(`Venue with ID ${id} has been deleted.`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
