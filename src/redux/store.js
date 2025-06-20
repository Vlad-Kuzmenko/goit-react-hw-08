import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import ContactsReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filters: filtersReducer,
  },
});
