import { toast } from "react-toastify";
import { fetchOptions } from "../../api";
import { BOOKINGS_URL, POST } from "../../config";

export async function handleBookVenueFormSubmit(formData, token, resetForm) {
  try {
    const response = await fetch(
      BOOKINGS_URL,
      fetchOptions(formData, POST, token)
    );

    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status} `);
    }

    resetForm();
    toast("Venue booked", {
      position: "bottom-right",
      type: "success",
    });
  } catch (err) {
    toast(`An error occured: ${err}`, {
      position: "bottom-right",
      type: "error",
    });
  }
}
