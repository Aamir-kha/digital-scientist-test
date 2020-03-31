import React from "react";
import { Card, CardBody } from "reactstrap";
import { connect } from "react-redux";
import { updateSeatStatus } from "./../store/actions/seats.actions";

import * as socketIO from "socket.io-client";
const socket = socketIO("http://localhost:4000");
let counter = 0;

const Seat = ({ seat, seats, userSelected, updateSeatStatus }) => {
  const clickHandler = () => {
    if (counter < 10) {
      console.log("Counter", counter);
      // updateSeatStatus(seat.id);
      socket.emit("seat-selected", { seatId: seat.id });
      counter++;
    } else {
      alert("Cannot selected more than 10 seats");
    }
  };
  return (
    <div>
      <Card
        onClick={clickHandler}
        style={{
          backgroundColor:
            seat.status === "Your_Selected"
              ? "#0000ed"
              : seat.status === "Selected"
              ? "#6464ff"
              : "#ededff"
        }}
        className="rounded-circle"
      >
        <CardBody>
          <h1>{seat.id}</h1>
        </CardBody>
      </Card>
      <div>Counter: {counter}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    seats: state.seatsReducer.seats,
    userSelected: state.seatsReducer.userSelected
  };
};
export default connect(mapStateToProps, { updateSeatStatus })(Seat);
