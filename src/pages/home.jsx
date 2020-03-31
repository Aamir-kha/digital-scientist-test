import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import Seat from "../components/seat.component";
import {
  getAllSeats,
  updateSeatStatus
} from "./../store/actions/seats.actions";

import * as socketIO from "socket.io-client";
const socket = socketIO("http://localhost:4000");

const HomePage = ({ seats, userSelected, getAllSeats, updateSeatStatus }) => {
  useEffect(() => {
    getAllSeats();
    socket.on("seats-updated", data => {
      console.log("seat updated (frontEnd) ::: ", data);
      updateSeatStatus(data.seatId);
    });
  }, []);
  return (
    <>
      <Container className="my-5">
        <Row>
          <h2>Real-time Seat Reservation: </h2>
        </Row>
        <Row className="my-2">
          {seats.map((seat, i) => {
            return (
              <Col className="my-2" md="2" key={i}>
                <Seat seat={seat} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = state => {
  console.log("state state state ::: ", state);
  return {
    seats: state.seatsReducer.seats,
    userSelected: state.seatsReducer.userSelected
  };
};
export default connect(mapStateToProps, { getAllSeats, updateSeatStatus })(
  HomePage
);
