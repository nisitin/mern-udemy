let userState;

if (window.localStorage.getItem('auth')) {
    userState = window.localStorage.getItem('auth')
} else {
    userState = null;
}

//ここで変わる変数を代入することよきまる侍
export const authReducer = (state = userState, action) => {
    switch (action.type) {
        case "LOGGED_IN_USER":
            return { ...state, ...action.payload }
        case "LOGOUT":
            return action.payload
        default:
            return state;
    }
}