import { createReducer } from "@reduxjs/toolkit";
import { filterValue } from "./actions";

export const contactsFilter = createReducer("", {
  [filterValue]: (state, { payload }) => (state = payload),
});
