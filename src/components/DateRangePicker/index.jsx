import { DatePicker } from "@mui/x-date-pickers";
import { disableBookedDates } from "../../utils/disableBookedDates";
import { ErrorMessage } from "../../forms/styled";

export function DateRangePicker({ date, setDate, errors, venue }) {
  return (
    <>
      <div>
        <DatePicker
          disablePast
          label={"Check-in date"}
          id="dateFrom"
          onChange={(value) => {
            setDate({ ...date, dateFrom: value });
          }}
          sx={{ width: "100%" }}
          shouldDisableDate={(date) => disableBookedDates(date, venue)}
          value={date.dateFrom || null}
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
          value={date.dateTo || null}
          onChange={(value) => {
            setDate({ ...date, dateTo: value });
          }}
          sx={{
            width: "100%",
          }}
          shouldDisableDate={(date) => disableBookedDates(date, venue)}
        />

        {errors.dateTo && <ErrorMessage>{errors.dateTo.message}</ErrorMessage>}
      </div>
    </>
  );
}
