import { createAction } from "@reduxjs/toolkit";

/**
 * Action to set filter value.
 * @returns {func} Filter action function.
 */
export const setFilterAction = createAction('filter/setFilter');
