import { Modal } from "../../components/Modal";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { useEffect, useState } from "react";
import { PROFILE_URL } from "../../config";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editAvatarSchema } from "../../schemas";
import { ProfileContainer, ProfileMain, StyledSection } from "./styled";
import { UpgradeToVenueManagerForm } from "../../forms/UpgradeToVenueManagerForm";
import { EditAvatarForm } from "../../forms/EditAvatarForm";
import { useFetch } from "../../hooks/useFetch";
import {
  Customer,
  ProfileImage,
  ProfileInformation,
  UpgradeCreateButtons,
  VenueManager,
} from "./components";
import { handleProfileFormSubmit } from "../../handlers";
import { Navigate } from "react-router-dom";
import { Line } from "../../components/Line";

export default function Profile() {
  const profileInfo = getLocalStorageItem("user");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);
  const [userData, setUserData] = useState();

  const closeAvatarModal = () => {
    setIsAvatarModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const openAvatarModal = () => {
    setIsAvatarModalOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeManagerModal = () => {
    setIsManagerModalOpen(false);
    document.body.style.overflow = "auto";
  };
  const openManagerModal = () => {
    setIsManagerModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const {
    name: userName,
    email,
    avatar,
    accessToken: token,
    venueManager,
  } = profileInfo || {};

  const isVenueManager = venueManager;

  const { data, isError, isLoading } = useFetch(
    `${PROFILE_URL}/${userName}${
      isVenueManager ? "?_venues=true&_bookings=true" : "?_bookings=true"
    }`,
    null,
    token
  );

  useEffect(() => {
    if (!isLoading && !isError) {
      setUserData(data);
    }
  }, [data, isLoading, isError]);

  let schema = editAvatarSchema;

  const {
    register,
    handleSubmit,
    watch,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: profileInfo,
  });

  const isChecked = watch();

  const onSubmit = async (formData) => {
    await handleProfileFormSubmit(
      formData,
      userName,
      token,
      profileInfo,
      resetForm,
      closeAvatarModal,
      closeManagerModal,
      setIsSubmitting,
      isAvatarModalOpen
    );
  };

  if (!profileInfo) return <Navigate to="/forbidden" />;

  if (isError) return <p>Something went wrong..</p>;

  return (
    <ProfileMain>
      <ProfileContainer>
        <StyledSection>
          <ProfileImage
            userName={userName}
            avatar={avatar}
            openAvatarModal={openAvatarModal}
          />
          <ProfileInformation
            userName={userName}
            email={email}
            venueManager={venueManager}
            openAvatarModal={openAvatarModal}
          />
          <UpgradeCreateButtons
            venueManager={venueManager}
            openManagerModal={openManagerModal}
          />
        </StyledSection>
        <Line />
        <StyledSection>
          {isVenueManager && (
            <VenueManager
              isSubmitting={isSubmitting}
              setIsSubmitting={setIsSubmitting}
              setUserData={setUserData}
              userData={userData}
              isLoading={isLoading}
              token={token}
            />
          )}

          {!isVenueManager && (
            <Customer
              userData={userData}
              isVenueManager={isVenueManager}
              isSubmitting={isSubmitting}
              setUserData={setUserData}
              isLoading={isLoading}
            />
          )}
        </StyledSection>
      </ProfileContainer>

      {isAvatarModalOpen && (
        <Modal
          closeModal={closeAvatarModal}
          isSubmitting={isSubmitting}
          formId="edit-avatar-form"
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
          closeModal={closeManagerModal}
          isSubmitting={isSubmitting}
          formId="upgrade-to-manager-form"
          modalTitle="Upgrade to Venue Manager"
          buttonType="submit"
          isChecked={isChecked}
          isModalOpen={isManagerModalOpen}
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
