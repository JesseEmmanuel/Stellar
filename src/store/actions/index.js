import { SET_USERS } from "./types";

export const setUsers = (payload) => {
    return {
        type: SET_USERS,
        payload
    }
}