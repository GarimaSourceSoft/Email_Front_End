import { combineReducers } from "redux";
import Global from "./Global";

const rootReducer = combineReducers({
  all: Global,
  // SelectedEmail:Global,
});

export default rootReducer;
