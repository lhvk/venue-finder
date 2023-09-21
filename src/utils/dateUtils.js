import {
  differenceInDays,
  differenceInMonths,
  differenceInWeeks,
  format,
} from "date-fns";

/**
 * Formats a date into a string using the specified date format.
 *
 * @param {Date|string} date - The date to be formatted, either a Date object or a valid date string.
 * @param {string} [dateFormat="dd/MM/yyyy"] - The format for the output date string. Default is "dd/MM/yyyy".
 * @returns {string} The formatted date string.
 */

export function formatDate(date, dateFormat) {
  return format(new Date(date), dateFormat || "dd/MM/yyyy");
}

export function getRelativeTime(date) {
  const daysAgo = differenceInDays(new Date(), new Date(date));
  const weeksAgo = differenceInWeeks(new Date(), new Date(date));
  const monthsAgo = differenceInMonths(new Date(), new Date(date));

  if (monthsAgo >= 1) {
    return `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else if (weeksAgo >= 1) {
    return `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
  } else if (daysAgo >= 2) {
    return `${daysAgo} days ago`;
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else {
    return "Today";
  }
}
