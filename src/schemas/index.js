import * as yup from "yup";

// Yup predefined form control
const nameYup = yup.string().required("Name is required");
const emailYup = yup
  .string()
  .required("Email is required")
  .matches(
    /^[a-zA-Z0-9._%+-]+@(stud\.)?noroff\.no$/,
    "Only emails ending with @stud.noroff.no is allowed"
  );
const passwordYup = yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters");
const avatarYup = yup.string().url("Invalid URL format").nullable();

const venueNameYup = yup.string().required("Name is required");
const venueDescriptionYup = yup.string().required("Description is required");
const venueMediaYup = yup
  .mixed()
  .test("is-valid-media", "Invalid media", (value) => {
    if (value === null) return true;

    if (typeof value === "string") {
      const urls = value.split(",").map((url) => url.trim());
      return urls.every((url) =>
        yup.string().url("Invalid URL").isValidSync(url)
      );
    }

    if (Array.isArray(value)) {
      return value.every((url) =>
        yup.string().url("Invalid URL").isValidSync(url.trim())
      );
    }

    return false;
  })
  .transform((value) => {
    if (typeof value === "string") {
      return value.split(",").map((url) => url.trim());
    }
    return value;
  });
const venuePriceYup = yup
  .number()
  .positive()
  .min(1)
  .required("Price is required");
const venueMaxGuestsYup = yup
  .number()
  .positive()
  .min(1)
  .required("Max Guests is required");
const venueRatingYup = yup.number().min(0).default(0).max(5);
const venueMetaYup = yup.object().shape({
  wifi: yup.boolean().default(false),
  parking: yup.boolean().default(false),
  breakfast: yup.boolean().default(false),
  pets: yup.boolean().default(false),
});
const venueLocationYup = yup.object().shape({
  address: yup.string().default("Unknown"),
  city: yup.string().default("Unknown"),
  zip: yup.string().default("Unknown"),
  country: yup.string().default("Unknown"),
  continent: yup.string().default("Unknown"),
  lat: yup.number().nullable().default(0),
  lng: yup.number().nullable().default(0),
});

// Schemas

export const registerSchema = yup.object().shape({
  name: nameYup,
  email: emailYup,
  password: passwordYup,
  avatar: avatarYup,
});

export const loginSchema = yup.object().shape({
  email: emailYup,
  password: passwordYup,
});

export const editAvatarSchema = yup.object().shape({
  avatar: avatarYup || null,
});

export const createVenueSchema = yup.object().shape({
  name: venueNameYup,
  description: venueDescriptionYup,
  media: venueMediaYup,
  price: venuePriceYup,
  maxGuests: venueMaxGuestsYup,
  rating: venueRatingYup,
  meta: venueMetaYup,
  location: venueLocationYup,
});

export function getBookingSchema(venue) {
  const bookingSchema = yup.object().shape({
    dateFrom: yup
      .date()
      .required("Check-in date is required")
      .typeError("Check-in date must be a valid date")
      .test(
        "fromDateBeforeToDate",
        "Check-in date must be before Check-out date",
        (dateFrom, context) => {
          const dateTo = context.parent.dateTo;
          return !dateFrom || !dateTo || dateFrom < dateTo;
        }
      ),
    dateTo: yup
      .date()
      .required("Check-out date is required")
      .typeError("Check-out date must be a valid date")
      .test(
        "fromDateBeforeToDate",
        "Check-out date must be after Check-in date",
        (dateTo, context) => {
          const dateFrom = context.parent.dateFrom;
          return !dateFrom || !dateTo || dateTo > dateFrom;
        }
      ),
    guests: yup
      .number()
      .required("Number of guests is required")
      .positive("Number of guests must be positive")
      .integer("Number of guests must be an integer")
      .typeError("Number of guests must be a valid number")
      .test(
        "maxGuests",
        "Number of guests exceeds the maximum allowed",
        (value) => {
          return value <= venue.maxGuests;
        }
      ),
    venueId: yup.string().required("Venue ID is required"),
  });
  return bookingSchema;
}
