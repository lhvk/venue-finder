import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getBookingSchema } from "../../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleBookVenueFormSubmit } from "../../../handlers/handleBookVenueFormSubmit";
import { BookVenueForm } from "../../../forms/BookVenueForm";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { disableBookedDates } from "../../../utils/disableBookedDates";
import { MOBILE } from "../../../config";
import { useMediaQuery } from "@mui/material";

export function BookVenue({ venue, accessToken, isVenueManager }) {
  const isMobile = useMediaQuery(MOBILE);
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

  const onSubmit = async (formData) => {
    formData.dateFrom = formData.dateFrom.toISOString();
    formData.dateTo = formData.dateTo.toISOString();

    await handleBookVenueFormSubmit(formData, accessToken, resetForm);
  };

  const isCustomer = !isVenueManager && accessToken;

  return isCustomer ? (
    <BookVenueForm
      isLoggedIn={accessToken}
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      setDate={setDate}
      date={date}
      venue={venue}
      isVenueManager={isVenueManager}
    />
  ) : (
    <>
      <StaticDatePicker
        shouldDisableDate={(date) => disableBookedDates(date, venue)}
        disablePast
        readOnly
        disableHighlightToday
        slotProps={{
          calendarHeader: { disablePast: true },
          toolbar: {
            toolbarPlaceholder: "Available dates",
          },
        }}
        sx={{
          ".MuiDialogActions-root": {
            display: "none",
          },
          "&.MuiPickersLayout-root": {
            justifyContent: isMobile ? "start" : "end",
            margin: "-20px",
          },
        }}
      />
    </>
  );
}
