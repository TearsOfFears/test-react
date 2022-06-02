import userTypes from "./user.types";

const INITIAL_STATE = {
  loading:true,
  error: '',
  data:[],
  currPage:1,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.LOAD_USERS_LOADING:
      return {
        ...state,
        data: action.payload,
        //currPage:action.payload,
        loading:true,
      }
      case userTypes.LOAD_USERS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          //currPage:action.payload,
          loading:false
        }
        case userTypes.SET_ACTIVE_PAGE:
          return {
            ...state,
            currPage:action.payload,
          }
        case userTypes.LOAD_USERS_ERROR: 
        {
          return {
              ...state,
              loading: true,
              error: action.error
          };
      }
    default:
      return state;
  }
};

export default userReducer;