import { setLocalStorageItem } from "./localStorageUtils";

export function logout(navigate) {
  setLocalStorageItem("user", null);
  navigate("/");
}
