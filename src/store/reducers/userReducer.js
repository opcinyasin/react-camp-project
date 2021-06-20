import {userItems} from "../initialValues/userItems";
import {SIGN_IN, SING_OUT} from "../actions/userActions";

const initialState = {
    userItems: userItems
}

export default function userReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SIGN_IN:
            return {
                userItems: {isAuthenticated: payload}
            }
        case SING_OUT:
            return {
                userItems: {isAuthenticated: payload}
            }
        default:
            return state
    }
}
