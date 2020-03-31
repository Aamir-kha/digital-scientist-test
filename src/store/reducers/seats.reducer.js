import { GET_ALL_SEATS, UPDATE_SEATS } from "../actions/types";

const initialState = {
  seats: [],
  userSelected: 0
}


const seatsReducer = (state = initialState, action) => {
   if(action.type === GET_ALL_SEATS){
     return {
       ...state,
       seats: [...action.payload]
     }
   }else if(action.type === UPDATE_SEATS){
     console.log("UPDATE_SEATS")
     let currentSeats = state.seats;
     let index = currentSeats.findIndex(seat => seat.id == action.payload);
     currentSeats[index].status = 'Your_Selected';
    return {
      ...state,
      seats: [...currentSeats]
    }
  }
   else{
     return state
   }
}

export default seatsReducer;