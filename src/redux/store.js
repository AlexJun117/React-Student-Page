import { createStore } from "redux";
import { reducer } from "./reducer";

const initializeState = {
  value: 0,
  studentData:[               
  {id:1, name:"1John", birthday:"1990-04-22", city:"NewYork", state:"Maine", zip:90998},
  {id:2, name:"2David", birthday:"1988-01-04", city:"Beloa", state:"Maine", zip:92302},
  {id:3, name:"3Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
  {id:4, name:"4Chris", birthday:"1993-09-11", city:"Los Angels", state:"Maine", zip:91123},
]
};

const store = createStore(reducer, initializeState);
export default store;
