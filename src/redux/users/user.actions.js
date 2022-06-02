import userTypes from "./user.types";
import axios from "axios";
export const onGetAllUsers = (filter) => {
    
    return async (dispatch, getState) => {
        const {users} = getState();
        const {
            sort,
            order,
            name
        } = filter || {}
        const params = {
            _sort: sort ? sort : "",
            _order: order ? order : "",
            _limit: 4,
             _page: users.currPage,
            username_like: name ? name : "",
        }
        dispatch({
            type: userTypes.LOAD_USERS_LOADING
        });
        await axios.get('https://jsonplaceholder.typicode.com/users', {
                params
            })
            .then(res => setTimeout(() => {
                dispatch({
                    type: userTypes.LOAD_USERS_SUCCESS,
                    payload: res.data,
                })
            }, 500))
            .catch(e => dispatch({
                type: userTypes.LOAD_USERS_ERROR,
                payload: e,
            }))
    }
}

export const setCurrentPageAction = (page) => ({type:userTypes.SET_ACTIVE_PAGE, payload:page})