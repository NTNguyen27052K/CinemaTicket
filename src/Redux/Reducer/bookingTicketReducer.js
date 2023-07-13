import initialStateALL from "../../danhSachGhe.json";
import {
  ADDTOLISTTICKET,
  DELETETOLISTSELECTEDTICKET,
} from "../Type/bookingTicketType";

const initialState = {
  arrListSeat: initialStateALL,
  arrSelectedSeatList: [],
};
export const bookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOLISTTICKET: {
      //Tìm ghế có trong list ghế đã chọn chưa
      const index = state.arrSelectedSeatList.findIndex(
        (item) => item.soGhe === action.payload.soGhe
      );
      console.log(index);
      const newArrSelectedSeatList = [...state.arrSelectedSeatList];

      if (index === -1) {
        newArrSelectedSeatList.push({ ...action.payload, daDat: "true" });
      }

      return { ...state, arrSelectedSeatList: newArrSelectedSeatList };
    }
    case DELETETOLISTSELECTEDTICKET: {
      const index = state.arrSelectedSeatList.findIndex(
        (item) => item.soGhe == action.payload.soGhe
      );

      const newArrSelectedSeatList = [...state.arrSelectedSeatList];
      console.log(index);
      if (index !== -1) {
        newArrSelectedSeatList.splice(index, 1);
      }

      return { ...state, arrSelectedSeatList: newArrSelectedSeatList };
    }

    default:
      return { ...state };
  }
};
