import postTypes from "./post.types";
import axios from "axios";
export const getUsersPosts = (id) => {
    
    return async (dispatch, getState) => {
        dispatch({
            type: postTypes.LOAD_POSTS_LOADING
        });
        await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}&_limit=5`)
            .then(res => setTimeout(() => {
                dispatch({
                    type: postTypes.LOAD_POSTS_SUCCESS,
                    payload: res.data,
                })
            }, 500))
            .catch(e => dispatch({
                type: postTypes.LOAD_POSTS_ERROR,
                payload: e,
            }))
    }
}


export const onModalHideShow = (bool) =>({type:postTypes.HIDE_SHOW_MODAL,payload:bool})