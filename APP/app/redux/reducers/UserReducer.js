import { GET_USER } from "../actions/type";
import { fail, success } from "@app/utils/SagaHelper";

const initialState = {
  data: {},
  isLoading: true,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
      return { ...state, isLoading: true };
    }
    case success(GET_USER): {
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload
      };
    }
    case fail(GET_USER): {
      return {
        ...state,
        error: true,
        isLoading: false
      };
    }
    default:
      return state;
  }
}
