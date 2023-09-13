import { Modal } from "../../components/Modal";
import { getLocalStorageItem } from "../../utils/localStorageUtils";
import { useEffect, useState } from "react";
import { PROFILE_URL, VENUES } from "../../config";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editAvatarSchema } from "../../schemas";
import { ProfileContainer, ProfileMain, Column } from "./styled";
import { UpgradeToVenueManagerForm } from "../../forms/UpgradeToVenueManagerForm";
import { EditAvatarForm } from "../../forms/EditAvatarForm";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/Loader";
import {
  ProfileImage,
  ProfileInformation,
  UpgradeCreateButtons,
  UserVenues,
} from "./components";
import { handleProfileFormSubmit } from "../../handlers";
import { Navigate } from "react-router-dom";

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
  } = profileInfo || {};

  const isVenueManager = venueManager;

  const { data, isError, isLoading } = useFetch(
    `${PROFILE_URL}/${userName}/${VENUES}?_bookings=true`,
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
    await handleProfileFormSubmit(
      formData,
      userName,
      token,
      profileInfo,
      resetForm,
      closeAvatarModal,
      closeManagerModal
    );
  };

  if (!profileInfo) return <Navigate to="/forbidden" />;

  if (!data && isLoading) return <Loader message={"your venues"} />;

  if (isError) return <p>Something went wrong..</p>;

  return (
    <ProfileMain>
      <ProfileContainer>
        <Column $gap="10px">
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
        </Column>
        <Column>
          <UserVenues
            venueData={venueData}
            setVenueData={setVenueData}
            token={token}
            isVenueManager={isVenueManager}
          />
        </Column>
      </ProfileContainer>

      {isAvatarModalOpen && (
        <Modal
          handleUpload={handleSubmit(onSubmit)}
          // isModalOpen={isAvatarModalOpen}
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
          // isModalOpen={isManagerModalOpen}
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
