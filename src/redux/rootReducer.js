// import {combineReducers} from 'redux'
import userReducer from './users/user.reducer';
import postReducer from './posts/posts.reducer';
const rootReducer = () => ({
    users:userReducer,
    posts:postReducer
  });
export default  rootReducer