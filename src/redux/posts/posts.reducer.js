import postTypes from "./post.types";

const INITIAL_STATE = {
  post: null,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postTypes.GET_USERS:
      return {
        ...state,
        currentUser: action.payload,
      }
      case postTypes.LOADING:
        return {
          ...state,
          loading: action.payload
        }
    default:
      return state;
  }
};

export default postReducer;