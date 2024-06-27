import FILTER from "./constants";

/**
 * Action to set filter value.
 * @param {string} value Value of the filter.
 * @returns {object} Filter action object.
 */
export const setFilterAction = value => {
  return {
    type: FILTER.TYPES.SET_FILTER,
    payload: value,
  };
};
