import postTypes from "./post.types";

export const onGetAllUsers = users =>({
    type:postTypes.GET_USERS,
    payload:users
})
