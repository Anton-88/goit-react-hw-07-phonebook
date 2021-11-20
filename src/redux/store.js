import { configureStore } from "@reduxjs/toolkit";
import { contactsFilter } from "./phonebook/reducers";
import { mockApiSlice } from "./phonebook/mockApi";

export const store = configureStore({
  reducer: {
    [mockApiSlice.reducerPath]: mockApiSlice.reducer,
    filter: contactsFilter,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApiSlice.middleware),
});
