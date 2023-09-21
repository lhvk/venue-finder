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
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";

// Placeholder Venue Image
export const PLACEHOLDER_IMG =
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80";
