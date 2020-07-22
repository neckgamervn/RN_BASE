import { NAVIGATE } from "../actions/type";
import { SCREEN_ROUTER } from "@app/constants/Constant";

const initialState = {
  switch: SCREEN_ROUTER.SPLASH
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NAVIGATE: {
      return { ...state, switch: action.payload };
    }

    default:
      return state;
  }
}
