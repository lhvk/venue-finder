import { DatePicker } from "@mui/x-date-pickers";
import { ErrorMessage, FormBody, FormContainer, Input, Form } from "../styled";
import { TextField } from "@mui/material";
import { endOfDay, startOfDay } from "date-fns";

export function BookVenueForm({
  onSubmit,
  register,
  errors,
  date,
  setDate,
  venue,
}) {
  function disableBookedDates(date) {
    if (venue.bookings.length === 0) return false;

    for (const booking of venue.bookings) {
      const startDate = startOfDay(new Date(booking.dateFrom));
      const endDate = endOfDay(new Date(booking.dateTo));

      if (date >= startDate && date <= endDate) {
        return true;
      }
    }

    return false;
  }

  return (
    <FormContainer>
      <Form
        onSubmit={onSubmit}
        id="book-venue-form">
        <FormBody>
          <div>
            <Input
              type="hidden"
              id="venueId"
              {...register("venueId", {
                required: "Venue ID is required",
              })}
            />
          </div>
          <div>
            <DatePicker
              disablePast
              label="Check-in date"
              id="dateFrom"
              onChange={(value) => {
                setDate({ ...date, dateFrom: value });
              }}
              sx={{ width: "100%" }}
              shouldDisableDate={(date) => disableBookedDates(date)}
            />

            {errors.dateFrom && (
              <ErrorMessage>{errors.dateFrom.message}</ErrorMessage>
            )}
          </div>
          <div>
            <DatePicker
              disablePast
              label="Check-out date"
              id="dateTo"
              value={date.dateTo}
              onChange={(value) => {
                setDate({ ...date, dateTo: value });
              }}
              sx={{
                width: "100%",
              }}
              shouldDisableDate={(date) => disableBookedDates(date)}
            />

            {errors.dateTo && (
              <ErrorMessage>{errors.dateTo.message}</ErrorMessage>
            )}
          </div>
          <div>
            <TextField
              label="Number of guests"
              type="number"
              id="guests"
              {...register("guests", {
                required: "Number of guests is required",
              })}
              sx={{ width: "100%" }}
            />
            {errors.guests && (
              <ErrorMessage>{errors.guests.message}</ErrorMessage>
            )}
          </div>
        </FormBody>
      </Form>
    </FormContainer>
  );
}
