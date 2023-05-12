/**
 * capitalize
 * Uppercase the first letter of a given string
 *
 * @returns {String} String with first letter in uppercase
 */
export const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase().concat(text.slice(1));
};
