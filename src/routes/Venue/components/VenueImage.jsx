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
import { useEffect, useState } from "react";
import { Modal } from "../../../components/Modal";
import { BookVenueForm } from "../../../forms/BookVenueForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getLocalStorageItem } from "../../../utils/localStorageUtils";
import { getBookingSchema } from "../../../schemas";

export function VenueImage({ venue }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState({
    dateFrom: null,
    dateTo: null,
  });

  const user = getLocalStorageItem("user");

  const { accessToken, name } = user || {};

  const canEditVenue = name === venue.owner?.name;

  const {
    register,
    handleSubmit,
    setValue,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(getBookingSchema(venue, date.dateFrom, date.dateTo)),
    defaultValues: {
      venueId: venue.id,
      dateFrom: date.dateFrom,
      dateTo: date.dateTo,
    },
  });

  useEffect(() => {
    // Set the values in the form when date changes
    setValue("dateFrom", date.dateFrom);
    setValue("dateTo", date.dateTo);
  }, [date, setValue]);

  const onSubmit = (formData) => {
    formData.dateFrom = formData.dateFrom.toISOString();
    formData.dateTo = formData.dateTo.toISOString();

    console.log("formData", formData);
    // Add your form submission logic here
  };

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
          {canEditVenue && (
            <NavLink to={`/edit-venue/${venue.id}`}>
              <EditVenueContainer>
                <Icon id="edit-icon" />
                Edit venue
              </EditVenueContainer>
            </NavLink>
          )}
        </VenueTitle>
        <h2>Description:</h2>
        <article>{venue.description}</article>
        <Button onClick={openModal}>Book this venue</Button>
      </VenueImgContainer>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          handleUpload={handleSubmit(onSubmit)}
          modalTitle="Book venue"
          buttonType="submit"
          formId="book-venue-form"
          children={
            <>
              <BookVenueForm
                register={register}
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                setDate={setDate}
                date={date}
                venue={venue}
              />
            </>
          }
        />
      )}
    </>
  );
}
