import placeholderProfileImg from "../assets/placeholder_profile.jpg";
import placeHolderVenueImg from "../assets/cottage200kb.jpg";

// Breakpoints
const breakpoints = {
  small: "480px",
  medium: "768px",
};

export const MOBILE = `(max-width: ${breakpoints.small})`;
export const TABLET = `(max-width: ${breakpoints.medium})`;

// URL's
const AUTH = "auth";
const REGISTER = "register";
const LOGIN = "login";
const PROFILES = "profiles";
const BOOKINGS = "bookings";
export const VENUES = "venues";
export const MEDIA = "media";

export const BASE_URL = "https://api.noroff.dev/api/v1/holidaze";
export const REGISTER_URL = `${BASE_URL}/${AUTH}/${REGISTER}`;
export const LOGIN_URL = `${BASE_URL}/${AUTH}/${LOGIN}`;
export const PROFILE_URL = `${BASE_URL}/${PROFILES}`;
export const VENUE_URL = `${BASE_URL}/${VENUES}`;
export const BOOKINGS_URL = `${BASE_URL}/${BOOKINGS}`;

// Fetch methods
export const GET = "GET";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";

// Placeholder Venue Image
export const PLACEHOLDER_IMG = placeHolderVenueImg;

// Placeholder Profile Image
export const PLACEHOLDER_PROFILE_IMG = placeholderProfileImg;
