import { configureStore } from "@reduxjs/toolkit";
import { bookingTicketReducer } from "./Reducer/bookingTicketReducer";

// console.log(bookingTicketReducer());
export const store = configureStore({
  reducer: {
    ticket: bookingTicketReducer,
  },
});
