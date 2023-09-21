import { toast } from "react-toastify";
import { fetchOptions } from "../../api";
import { PUT, VENUE_URL } from "../../config";

export const handleEditVenue = async (
  formData,
  id,
  resetForm,
  navigate,
  accessToken
) => {
  try {
    const response = await fetch(
      `${VENUE_URL}/${id}`,
      fetchOptions(formData, PUT, accessToken)
    );
    if (!response.ok)
      throw new Error(`Something went wrong: ${response.status} `);

    const updatedVenue = await response.json();

    resetForm();
    toast("Venue edited", {
      position: "bottom-right",
      type: "success",
    });
    navigate(`/venue/${updatedVenue.id}`);
  } catch (err) {
    toast(`Something went wrong: ${err}`, {
      position: "bottom-right",
      type: "error",
    });
  }
};
