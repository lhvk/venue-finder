import { MEDIA, PROFILE_URL, PUT } from "../../config";
import { fetchOptions } from "../../api/index";
import { toast } from "react-toastify";

export async function handleProfileFormSubmit(
  formData,
  userName,
  token,
  profileInfo,
  resetForm,
  closeAvatarModal,
  closeManagerModal,
  setIsSubmitting,
  isAvatarModalOpen
) {
  const updateAvatarURL = `${PROFILE_URL}/${userName}/${MEDIA}`;
  const upgradeToManagerURL = `${PROFILE_URL}/${userName}`;

  try {
    setIsSubmitting(true);
    const response = await fetch(
      isAvatarModalOpen ? updateAvatarURL : upgradeToManagerURL,
      fetchOptions(formData, PUT, token)
    );

    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status} `);
    }

    const data = await response.json();

    let updatedProfileInfo = {
      ...profileInfo,
    };

    if (!isAvatarModalOpen) {
      updatedProfileInfo.venueManager = data.venueManager;
      resetForm();
      closeManagerModal();
      localStorage.setItem("user", JSON.stringify(updatedProfileInfo));
    } else {
      updatedProfileInfo.avatar = data.avatar;
      resetForm(updatedProfileInfo);
      closeAvatarModal();
      localStorage.setItem("user", JSON.stringify(updatedProfileInfo));
    }
  } catch (error) {
    toast.error(`${error}`, { position: "bottom-right" });
  } finally {
    setIsSubmitting(false);
    toast.success(
      isAvatarModalOpen ? "Avatar updated" : "You are now a Venue Manager",
      { position: "bottom-right" }
    );
  }
}
