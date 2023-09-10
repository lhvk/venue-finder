import {
  differenceInDays,
  differenceInMonths,
  differenceInWeeks,
  format,
} from "date-fns";

export function formatDate(date) {
  return format(new Date(date), "dd-MM-yyyy");
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
