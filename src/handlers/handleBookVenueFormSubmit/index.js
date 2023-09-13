import { fetchOptions } from "../../api";
import { BOOK_VENUE_URL, POST } from "../../config";

export async function handleBookVenueFormSubmit(formData, token, resetForm) {
  try {
    const response = await fetch(
      BOOK_VENUE_URL,
      fetchOptions(formData, POST, token)
    );

    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status} `);
    }
    resetForm();
  } catch (err) {
    console.log(err);
  }
}
