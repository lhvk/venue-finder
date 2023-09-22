import { endOfDay, startOfDay } from "date-fns";

export function disableBookedDates(date, venue) {
  if (!venue || !venue.bookings || venue.bookings.length === 0) return false;

  for (const booking of venue.bookings) {
    const startDate = startOfDay(new Date(booking.dateFrom));
    const endDate = endOfDay(new Date(booking.dateTo));

    if (date >= startDate && date <= endDate) {
      return true;
    }
  }

  return false;
}
