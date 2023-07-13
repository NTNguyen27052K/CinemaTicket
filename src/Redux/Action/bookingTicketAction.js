import {
  ADDTOLISTTICKET,
  DELETETOLISTSELECTEDTICKET,
} from "../Type/bookingTicketType";

export const addSeatAction = (item) => {
  return {
    type: ADDTOLISTTICKET,
    payload: item,
  };
};

export const deleteSeatAction = (item) => {
  return {
    type: DELETETOLISTSELECTEDTICKET,
    payload: item,
  };
};
