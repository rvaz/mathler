import * as ICONS from '@mathler/assets/icons';
import { capitalize } from '@utils/text';
import { ICON } from '@utils/regexes';

/**
 * getAllIcons
 * Retrieve all icons and return their names
 *
 * @returns {Array} Array with all icon names
 */
export const getAllIcons = () => {
  const iconsToExclude = ['default', 'icon'];

  return Object.keys(ICONS).filter((iconName) => !iconsToExclude.includes(iconName.toLowerCase()));
};

/**
 * isIconValid
 * Check if given icon name exists on our library
 *
 * @param {String} iconName Name of icon to check if exists
 * @returns {Boolean} True if there is an icon with given name on our library
 */
export const isIconValid = (iconName?: string) => {
  if (!iconName) return false;
  return getAllIcons().includes(parseIconName(iconName));
};

/**
 * parseIconName
 * Check for spaces, hyphens or underscores on received name
 *
 * @param {String} name Name of icon to parse
 * @returns {String} Parsed icon name with proper capitalization
 */
export const parseIconName = (name = '') => {
  if (!ICON.test(name)) return name;

  return name
    .replaceAll(ICON, ' ')
    .split(' ')
    .map((name) => capitalize(name.toLowerCase()))
    .join('');
};
