import { SET_TEXT } from "../types"

const handlers = {
    [SET_TEXT]: (state, {payload}) => ({
        ...state, searchText: payload.text
    }),
    DEFAULT: state => state
}

export const SearchReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    
    return handle(state, action)
}