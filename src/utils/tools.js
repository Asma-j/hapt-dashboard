/**
 * @description This method capitalizes the first character of a string.
 * @param string the string to work on.
 * @returns {*} capitalized string.
 */
export const capitaliseString = string => string.replace(/^\w/, c => c.toUpperCase());
