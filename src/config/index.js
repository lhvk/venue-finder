const breakpoints = {
  small: "480px",
  medium: "768px",
};

export const MOBILE = `(max-width: ${breakpoints.small})`;
export const TABLET = `(max-width: ${breakpoints.medium})`;
export const BASE_URL = "https://api.noroff.dev/api/v1/holidaze/";
export const REGISTER_URL = BASE_URL + "auth/register";
export const LOGIN_URL = BASE_URL + "auth/login";
export const POST = "POST";
export const PUT = "PUT";
export const DELETE = "DELETE";
