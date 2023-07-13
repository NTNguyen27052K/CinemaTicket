import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import RowSeat from "./RowSeat";
import { deleteSeatAction } from "../Redux/Action/bookingTicketAction";

class Body extends Component {
  renderHangGhe = (listSeat) => {
    return listSeat.map((item, index) => {
      // console.log(item);
      return (
        <Fragment key={index}>
          <RowSeat rowSeat={item} soHangGhe={index} />
        </Fragment>
      );
    });
  };

  renderListSelectedTicket = (listSelectedTicket) => {
    return listSelectedTicket.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.soGhe}</td>
          <td>{item.gia}</td>
          <td className="text-center">
            <button
              className="text-white"
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              onClick={() => {
                // this.props.deleteToListSelectedTicket(item);
                this.props.dispatch(deleteSeatAction(item));
              }}
            >
              <i class="fa-solid fa-x"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    // console.log(this.props.ticket);
    return (
      <div className="container row">
        <div className="col-8">
          <table className="text-center">
            {this.renderHangGhe(this.props.ticket)}
          </table>
        </div>
        <div className="col-4">
          <h2 className="text-white">Danh sách vé đặt</h2>
          <div className="seatInfo">
            <table>
              <tr>
                <th>
                  <button className="gheDuocChon me-3"></button>
                </th>
                <th style={{ fontSize: "30px", color: "white" }}>Ghế đã đặt</th>
              </tr>
              <tr>
                <th>
                  <button className="ghe"></button>
                </th>
                <th style={{ fontSize: "30px", color: "white" }}>
                  Ghế chưa đặt
                </th>
              </tr>
              <tr>
                <th>
                  <button className="gheDangChon"></button>
                </th>
                <th style={{ fontSize: "30px", color: "white" }}>
                  Ghế đang đặt
                </th>
              </tr>
            </table>
          </div>
          <div className="listTicket">
            <table
              style={{
                width: "100%",
                color: "white",
                border: " 1px solid white",
                borderCollapse: "collapse",
              }}
            >
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th className="text-center">Hủy</th>
              </tr>
              <tbody>
                {this.renderListSelectedTicket(this.props.listSeat)}
              </tbody>
              <tr>
                <td>Tổng tiền</td>
                <td>
                  {this.props.listSeat.reduce((totalMoney, item, index) => {
                    return (totalMoney += item.gia);
                  }, 0)}
                </td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ticket: state.ticket.arrListSeat,
    listSeat: state.ticket.arrSelectedSeatList,
  };
};

// const mapDispatToProps = (dispatch) => {
//   return {
//     deleteToListSelectedTicket: (item) => {
//       const action = {
//         type: "DELETETOLISTSELECTEDTICKET",
//         payload: item,
//       };
//       dispatch(action);
//     },
//   };
// };
const Reduxcomponent = connect(mapStateToProps)(Body);

export default Reduxcomponent;
