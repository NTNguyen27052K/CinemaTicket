import {
  ADDTOLISTTICKET,
  DELETETOLISTSELECTEDTICKET,
} from "../Type/bookingTicketType";

export let addSeatAction = (item) => {
  return {
    type: ADDTOLISTTICKET,
    payload: item,
  };
};

export let deleteSeatAction = (item) => {
  return {
    type: DELETETOLISTSELECTEDTICKET,
    payload: item,
  };
};
