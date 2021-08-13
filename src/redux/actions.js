import { getTodos } from "../api"
import { SET_PHOTOS, SET_POSTS, SET_TODOS, SET_USERS, TOGGLE_MENU } from "./types";

export const setTodos = async (dispatch, api) => {
    const data = await getTodos(api);

    console.log(data);

    dispatch({ type: `SET_${api}`, payload: data });
}

export const toggleMenu = (dispatch) => {
    dispatch({ type: TOGGLE_MENU })
}