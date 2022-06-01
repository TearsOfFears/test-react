import userTypes from "./user.types";
import axios from "axios";
export const onGetAllUsers = (filters)  => {

    return async (dispatch, getState) => {
        dispatch({ type: userTypes.LOAD_USERS_LOADING });
        await axios.get(`https://jsonplaceholder.typicode.com/users?${filters}`)
        .then(res => dispatch({
            type: userTypes.LOAD_USERS_SUCCESS,
            payload: res.data,
        }))
        .catch(e=>  dispatch({
            type: userTypes.LOAD_USERS_SUCCESS,
            payload: e,
        }))
    }
}
