import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export function BookVenueModal({ venue, accessToken, isVenueManager }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState({
    dateFrom: null,
    dateTo: null,
  });

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

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const onSubmit = async (formData) => {
    formData.dateFrom = formData.dateFrom.toISOString();
    formData.dateTo = formData.dateTo.toISOString();

    await handleBookVenueFormSubmit(
      formData,
      accessToken,
      resetForm,
      closeModal
    );
  };
  return (
    isModalOpen &&
    !isVenueManager && (
      <Modal
        closeModal={closeModal}
        modalTitle={accessToken ? "Book venue" : "View available dates"}
        buttonType="submit"
        formId="book-venue-form"
        infoOnly={!accessToken}
        children={
          <>
            <BookVenueForm
              isLoggedIn={accessToken}
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
    )
  );
}
