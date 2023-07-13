import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addSeatAction } from "../Redux/Action/bookingTicketAction";

class RowSeat extends Component {
  renderSeat = () => {
    return this.props.rowSeat.danhSachGhe.map((item, index) => {
      // console.log(item);
      let cssSeat = "";
      let disabled = false;
      if (item.daDat) {
        cssSeat = "gheDuocChon";
        disabled = true;
      }

      let cssgheDangChon = "";
      let indexGheDangChon = this.props.listSeat.findIndex(
        (gheDangChon) => gheDangChon.soGhe == item.soGhe
      );
      // console.log(indexGheDangChon);
      if (indexGheDangChon !== -1) {
        cssgheDangChon = "gheDangChon";
      }

      return (
        <td>
          <button
            disabled={disabled}
            className={`ghe ${cssSeat} ${cssgheDangChon} `}
            key={index}
            onClick={() => {
              // console.log(item);
              this.props.dispatch(addSeatAction(item));
            }}
          >
            {index + 1}
          </button>
        </td>
      );
    });
  };
  renderSoHang = () => {
    return this.props.rowSeat.danhSachGhe.map((item, index) => {
      return <th key={index}>{item.soGhe}</th>;
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <tr className="text-white">
          <th>{this.props.rowSeat.hang}</th>
          {this.renderSoHang()}
        </tr>
      );
    } else {
      return (
        <tr>
          <td>{this.props.rowSeat.hang}</td>
          {this.renderSeat()}
        </tr>
      );
    }
  };
  render() {
    console.log(this.props.listSeat);
    return (
      <Fragment className="text-white fs-4">{this.renderHangGhe()}</Fragment>
    );
  }
}
//
const mapStateToProps = (state) => {
  return {
    listSeat: state.ticket.arrSelectedSeatList,
  };
};
// const mapDispatToProps = (dispatch) => {
//   return {
//     addToListTicket: (item) => {
//       const action = {
//         type: "ADDTOLISTTICKET",
//         payload: item,
//       };
//       dispatch(action);
//     },
//   };
// };
export default connect(mapStateToProps)(RowSeat);
