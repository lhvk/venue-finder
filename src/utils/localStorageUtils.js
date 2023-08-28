/**
 * Stores the provided value in the local storage under the given key.
 *
 * @param {string} key - The key under which the value will be stored.
 * @param {*} value - The value to be stored in local storage.
 * @returns {void}
 */
export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Retrieves the value from local storage associated with the given key.
 *
 * @param {string} key - The key to look up in local storage.
 * @returns {*} The value associated with the provided key, or null if not found.
 */
export const getLocalStorageItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
