import { Modal } from "../../components/Modal";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { useEffect, useState } from "react";
import { MEDIA, PROFILE_URL, PUT, VENUES } from "../../config";
import { fetchOptions } from "../../api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editAvatarSchema } from "../../schemas";
import {
  Avatar,
  EditButton,
  EditButtonContainer,
  ProfileContainer,
  ProfileInfo,
  ProfileMain,
  AvatarContainer,
} from "./styled";
import { Icon } from "../../components/Icon";
import { Button, ButtonNavLink } from "../../components/Buttons";
import { NavLink } from "react-router-dom";
import { UpgradeToVenueManagerForm } from "../../forms/UpgradeToVenueManagerForm";
import { EditAvatarForm } from "../../forms/EditAvatarForm";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader";
import { deleteVenue } from "../../api/delete";
import {
  ProfileImage,
  ProfileInformation,
  UpgradeCreateButtons,
} from "./components";

export default function Profile() {
  const profileInfo = getLocalStorageItem("user");
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);
  const [venueData, setVenueData] = useState([]);
  const closeAvatarModal = () => setIsAvatarModalOpen(false);
  const openAvatarModal = () => setIsAvatarModalOpen(true);
  const closeManagerModal = () => setIsManagerModalOpen(false);
  const openManagerModal = () => setIsManagerModalOpen(true);

  const {
    name: userName,
    email,
    avatar,
    accessToken: token,
    venueManager,
  } = profileInfo;

  const { data, isError, isLoading } = useFetch(
    `${PROFILE_URL}/${userName}/${VENUES}`,
    null,
    token
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      setVenueData(data);
    }
  }, [data, isLoading, isError]);

  let schema = editAvatarSchema;

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: profileInfo,
  });

  const onSubmit = async (formData) => {
    const updateAvatarURL = PROFILE_URL + userName + MEDIA;
    const upgradeToManagerURL = PROFILE_URL + userName;
    try {
      const response = await fetch(
        formData.avatar ? updateAvatarURL : upgradeToManagerURL,
        fetchOptions(formData, PUT, token)
      );

      if (!response.ok)
        throw new Error(`Something went wrong: ${response.status} `);

      const data = await response.json();

      let updatedProfileInfo = {
        ...profileInfo,
      };

      if (formData.avatar) {
        updatedProfileInfo.avatar = data.avatar;
        resetForm();
        closeAvatarModal();
        return localStorage.setItem("user", JSON.stringify(updatedProfileInfo));
      }

      if (formData.venueManager) {
        updatedProfileInfo.avatar = data.venueManager;
        resetForm();
        closeManagerModal();
        return localStorage.setItem("user", JSON.stringify(updatedProfileInfo));
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!data && isLoading) return <Loader message={"your venues"} />;

  if (isError) return <p>Something went wrong..</p>;

  return (
    <ProfileMain>
      <ProfileContainer>
        <ProfileImage
          userName={userName}
          avatar={avatar}
          openAvatarModal={openAvatarModal}
        />
        <ProfileInformation
          userName={userName}
          email={email}
          venueManager={venueManager}
        />

        <UpgradeCreateButtons
          venueManager={venueManager}
          openManagerModal={openManagerModal}
        />
      </ProfileContainer>

      {isAvatarModalOpen && (
        <Modal
          handleUpload={handleSubmit(onSubmit)}
          isModalOpen={isAvatarModalOpen}
          closeModal={closeAvatarModal}
          modalTitle="Edit avatar"
          buttonType="submit"
          children={
            <EditAvatarForm
              register={register}
              onSubmit={handleSubmit(onSubmit)}
              errors={errors}
            />
          }
        />
      )}
      {isManagerModalOpen && (
        <Modal
          handleUpload={handleSubmit(onSubmit)}
          isModalOpen={isManagerModalOpen}
          closeModal={closeManagerModal}
          modalTitle="Upgrade to Venue Manager"
          buttonType="submit"
          children={
            <UpgradeToVenueManagerForm
              register={register}
              onSubmit={handleSubmit(onSubmit)}
            />
          }
        />
      )}
    </ProfileMain>
  );
}
