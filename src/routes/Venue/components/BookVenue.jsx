import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getBookingSchema } from "../../../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { handleBookVenueFormSubmit } from "../../../handlers/handleBookVenueFormSubmit";
import { BookVenueForm } from "../../../forms/BookVenueForm";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { disableBookedDates } from "../../../utils/disableBookedDates";
import { TABLET } from "../../../config";
import { useMediaQuery } from "@mui/material";
import { Line } from "../../../components/Line";
import { staticDatePickerStyles } from "../../../globalStyles/styles";
import { PopoverBox } from "../../../components/PopoverBox";

export function BookVenue({ venue, accessToken, isVenueManager }) {
  const isTablet = useMediaQuery(TABLET);
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

    setDate({ dateFrom: null, dateTo: null });
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
      {isTablet && <Line />}
      <div>
        <h3
          style={{
            width: "280px",
            marginLeft: isTablet ? 0 : "auto",
            marginTop: isTablet ? "20px" : 0,
          }}>
          Available dates <PopoverBox />
        </h3>

        <StaticDatePicker
          shouldDisableDate={(date) => disableBookedDates(date, venue)}
          disablePast
          readOnly
          disableHighlightToday
          slotProps={{
            calendarHeader: { disabled: true },
            toolbar: {
              hidden: true,
            },
          }}
          sx={staticDatePickerStyles(isTablet)}
        />
      </div>
    </>
  );
}
