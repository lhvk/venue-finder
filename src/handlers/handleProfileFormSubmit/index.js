import { MEDIA, PROFILE_URL, PUT } from "../../config";
import { fetchOptions } from "../../api/index";

export async function handleProfileFormSubmit(
  formData,
  userName,
  token,
  profileInfo,
  resetForm,
  closeAvatarModal,
  closeManagerModal
) {
  const updateAvatarURL = `${PROFILE_URL}/${userName}/${MEDIA}`;
  const upgradeToManagerURL = `${PROFILE_URL}/${userName}`;

  console.log(formData);
  console.log(upgradeToManagerURL);

  try {
    const response = await fetch(
      formData.avatar ? updateAvatarURL : upgradeToManagerURL,
      fetchOptions(formData, PUT, token)
    );

    if (!response.ok) {
      throw new Error(`Something went wrong: ${response.status} `);
    }

    const data = await response.json();

    let updatedProfileInfo = {
      ...profileInfo,
    };

    if (formData.avatar) {
      updatedProfileInfo.avatar = data.avatar;
      resetForm();
      closeAvatarModal();
      localStorage.setItem("user", JSON.stringify(updatedProfileInfo));
    }

    if (formData.venueManager) {
      updatedProfileInfo.venueManager = data.venueManager;
      resetForm();
      closeManagerModal();
      localStorage.setItem("user", JSON.stringify(updatedProfileInfo));
    }
  } catch (err) {
    console.error(err);
  }
}
