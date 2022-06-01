import userTypes from "./user.types";

const INITIAL_STATE = {
  loading:true,
  error: ''
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.LOAD_USERS_LOADING:
      return {
        ...state,
        data: action.payload,
        loading:true,
      }
      case userTypes.LOAD_USERS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading:false
        }
        case userTypes.LOAD_USERS_ERROR: {
          return {
              ...state,
              loading: false,
              error: action.error
          };
      }
    default:
      return state;
  }
};

export default userReducer;