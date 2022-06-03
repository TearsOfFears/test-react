import postTypes from "./post.types";

const INITIAL_STATE = {
  posts: [],
  loading:true,
  error:[],
  modal:false
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postTypes.LOAD_POSTS_LOADING:
      return {
        ...state,
        posts: action.payload,
        loading:true,
        modal:true
      }
      case postTypes.LOAD_POSTS_SUCCESS:
        return {
          ...state,
          posts: action.payload,
          loading:false,
          modal:true
        }
        case postTypes.HIDE_SHOW_MODAL:
          return {
            ...state,
            modal:action.payload,
          }
        case postTypes.LOAD_POSTS_ERROR: 
        {
          return {
              ...state,
              loading: true,
              error: action.error,
          };
      }
    default:
      return state;
  }
};

export default postReducer;