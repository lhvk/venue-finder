import * as yup from "yup";

// Yup predefined form control
const nameYup = yup.string().required("Name is required");
const emailYup = yup
  .string()
  .required("Email is required")
  .matches(
    /^[a-zA-Z0-9._%+-]+@(stud\.)?noroff\.no$/,
    "Only emails ending with stud@noroff.no is allowed"
  );
const passwordYup = yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters");
const avatarYup = yup.string().url("Invalid URL format");

// const venueNameYup = yup.string().required("Name is required");
// const venueDescriptionYup = yup.string().required("Description is required");
// const venueMediaYup = yup
//   .array()
//   .of(yup.string().url("Invalid URL format"))
//   .nullable();

// const venuePriceYup = yup
//   .number()
//   .positive()
//   .min(1)
//   .required("Price is required");
// const venueMaxGuestsYup = yup
//   .number()
//   .positive()
//   .min(1)
//   .required("Max Guests is required");
// const venueRatingYup = yup.number().min(0).default(0).max(5);
// const venueMetaYup = yup.object().shape({
//   wifi: yup.boolean().default(false),
//   parking: yup.boolean().default(false),
//   breakfast: yup.boolean().default(false),
//   pets: yup.boolean().default(false),
// });
// const venueLocationYup = yup.object().shape({
//   address: yup.string().default("Unknown"),
//   city: yup.string().default("Unknown"),
//   zip: yup.string().default("Unknown"),
//   country: yup.string().default("Unknown"),
//   continent: yup.string().default("Unknown"),
//   lat: yup.number().nullable().default(0),
//   lng: yup.number().nullable().default(0),
// });

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
  avatar: avatarYup || "",
});

// export const createVenueSchema = yup.object().shape({
//   name: venueNameYup,
//   description: venueDescriptionYup,
//   media: venueMediaYup,
//   price: venuePriceYup,
//   maxGuests: venueMaxGuestsYup,
//   rating: venueRatingYup,
//   meta: venueMetaYup,
//   location: venueLocationYup,
// });

// export const createVenueSchema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   description: yup.string().required("Description is required"),
//   media: yup.array().of(yup.string().url("Invalid URL format")),
//   price: yup.number().positive().required("Price is required"),
//   maxGuests: yup.number().positive().required("Max Guests is required"),
//   rating: yup.number().min(0).default(0),
//   meta: yup.object().shape({
//     wifi: yup.boolean().default(false),
//     parking: yup.boolean().default(false),
//     breakfast: yup.boolean().default(false),
//     pets: yup.boolean().default(false),
//   }),
//   location: yup.object().shape({
//     address: yup.string().default("Unknown"),
//     city: yup.string().default("Unknown"),
//     zip: yup.string().default("Unknown"),
//     country: yup.string().default("Unknown"),
//     continent: yup.string().default("Unknown"),
//     lat: yup.number().default(0),
//     lng: yup.number().default(0),
//   }),
// });
