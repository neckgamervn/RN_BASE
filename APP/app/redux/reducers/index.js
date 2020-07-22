import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import { RESET } from "../actions/type";
import SwitchNavigatorReducer from "./SwitchNavigatorReducer";

appReducer = combineReducers({
  UserReducer,
  SwitchNavigatorReducer
});

const initialState = appReducer({}, {});

export default (rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState;
  }

  return appReducer(state, action);
});
