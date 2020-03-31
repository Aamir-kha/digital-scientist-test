import axios from "axios";
import { GET_ALL_SEATS, UPDATE_SEATS } from "./types";
const SERVER_URL = "http://localhost:4000";

export const getAllSeats = () => dispatch => {
  axios.get(`${SERVER_URL}/seats`).then(res => {
    dispatch({
      type: GET_ALL_SEATS,
      payload: res.data.seats
    });
  });
};

export const updateSeatStatus = id => {
  return {
    type: UPDATE_SEATS,
    payload: id
  };
};
