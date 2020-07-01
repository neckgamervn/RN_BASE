import { GET_USER } from "../actions/type";
import { success, fail } from "@app/utils/SagaHelper";

const initialState = {
  data: {},
  isLoading: true,
  error: null
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
        error: null,
        data: action.payload
      };
    }
    case fail(GET_USER): {
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    }
    default:
      return state;
  }
}
