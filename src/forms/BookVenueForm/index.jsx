import { Form } from "react-router-dom";
import {
  ErrorMessage,
  FormBody,
  FormContainer,
  FormFooter,
  Input,
  Label,
} from "../styled";
import { DatePicker } from "@mui/x-date-pickers";
import { Button } from "../../components/Buttons";

export function BookVenueForm({ handleSubmit, register, errors, venue }) {
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <div>
            <Label htmlFor="dateFrom">Check-in Date</Label>
            {/* <DatePicker
              type="date"
              id="dateFrom"
              {...register("dateFrom", {
                required: "Check-in date is required",
              })}
            /> */}
            {errors.dateFrom && (
              <ErrorMessage>{errors.dateFrom.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label htmlFor="dateTo">Check-out Date</Label>
            {/* <DatePicker
              type="date"
              id="dateTo"
              {...register("dateTo", {
                required: "Check-out date is required",
              })}
            /> */}
            {errors.dateTo && (
              <ErrorMessage>{errors.dateTo.message}</ErrorMessage>
            )}
          </div>
          <div>
            <Label htmlFor="guests">Number of Guests</Label>
            <Input
              type="number"
              id="guests"
              {...register("guests", {
                required: "Number of guests is required",
              })}
            />
            {errors.guests && (
              <ErrorMessage>{errors.guests.message}</ErrorMessage>
            )}
          </div>
        </FormBody>
        <FormFooter>
          <Button type="submit">Book</Button>
        </FormFooter>
      </Form>
    </FormContainer>
  );
}
