import localforage from "localforage"
import { combineReducers } from "redux"
export default combineReducers({
    user: (setat: object = {}, action: any) => {
        switch (action.type) {
            case "USER":
                return action.data
            default:
                return setat
        }
    },
    cart: (setat: object = {}, action: any) => {
        switch (action.type) {
            case "CART":
                return action.data
            default:
                return setat
        }
    },
})