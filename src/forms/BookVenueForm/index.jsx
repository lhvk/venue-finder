import { Button } from "../../components/Buttons";
import { DateRangePicker } from "../../components/DateRangePicker";
import { ErrorMessage, FormBody, FormContainer, Input, Form } from "../styled";
import { TextField } from "@mui/material";

export function BookVenueForm({
  onSubmit,
  register,
  errors,
  date,
  setDate,
  venue,
}) {
  return (
    <FormContainer>
      <Form
        $paddingBlock="0"
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

          <DateRangePicker
            date={date}
            setDate={setDate}
            venue={venue}
            errors={errors}
          />

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

        <Button
          $maxWidth="100%"
          type="submit">
          Book this venue
        </Button>
      </Form>
    </FormContainer>
  );
}
