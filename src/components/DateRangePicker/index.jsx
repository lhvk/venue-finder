import { DatePicker } from "@mui/x-date-pickers";
import { disableBookedDates } from "../../utils/disableBookedDates";
import { ErrorMessage } from "../../forms/styled";

export function DateRangePicker({ date, setDate, errors, venue, isLoggedIn }) {
  return (
    <>
      <div>
        <DatePicker
          disablePast
          label={isLoggedIn ? "Check-in date" : "View available dates"}
          id="dateFrom"
          onChange={(value) => {
            setDate({ ...date, dateFrom: value });
          }}
          sx={{ width: "100%" }}
          shouldDisableDate={(date) => disableBookedDates(date, venue)}
        />

        {errors.dateFrom && (
          <ErrorMessage>{errors.dateFrom.message}</ErrorMessage>
        )}
      </div>
      {isLoggedIn && (
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
            shouldDisableDate={(date) => disableBookedDates(date, venue)}
          />

          {errors.dateTo && (
            <ErrorMessage>{errors.dateTo.message}</ErrorMessage>
          )}
        </div>
      )}
    </>
  );
}
