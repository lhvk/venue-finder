import { NavLink } from "react-router-dom";
import { PLACEHOLDER_IMG } from "../../../config";
import {
  EditVenueContainer,
  VenueImg,
  VenueImgContainer,
  VenueTitle,
} from "../styled";
import { Icon } from "../../../components/Icon";
import { Button } from "../../../components/Buttons";
import { useState } from "react";
import { Modal } from "../../../components/Modal";
import { BookVenueForm } from "../../../forms/BookVenueForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getLocalStorageItem } from "../../../utils/localStorageUtils";
import { bookingSchema } from "../../../schemas";

export function VenueImage({ venue }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState({
    range: undefined,
  });
  const { accessToken } = getLocalStorageItem("user");

  let schema = bookingSchema;

  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      id: venue.id,
    },
  });

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <VenueImgContainer>
        <VenueImg
          src={venue.media?.[0] || PLACEHOLDER_IMG}
          alt={venue.name}
        />
        <VenueTitle>
          <h1>{venue.name}</h1>
          <NavLink to={`/edit-venue/${venue.id}`}>
            <EditVenueContainer>
              <Icon id="edit-icon" />
              Edit venue
            </EditVenueContainer>
          </NavLink>
        </VenueTitle>
        <h2>Description:</h2>
        <article>{venue.description}</article>
        <Button onClick={openModal}>Book this venue</Button>
      </VenueImgContainer>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          modalTitle="Book venue"
          children={
            <>
              <BookVenueForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
              />
            </>
          }
        />
      )}
    </>
  );
}
