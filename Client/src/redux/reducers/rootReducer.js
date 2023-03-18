import { combineReducers } from "redux";
import absencesReducer from "./absences";

const rootReducer = combineReducers({
  absences: absencesReducer,
});

export default rootReducer;
