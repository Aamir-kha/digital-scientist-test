import { combineReducers, createStore , applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import seatsReducer from './reducers/seats.reducer';
const combinedReducers = combineReducers({
   seatsReducer
})
const middleWares = [thunk]
const store = createStore(combinedReducers, applyMiddleware(...middleWares))
export default store;