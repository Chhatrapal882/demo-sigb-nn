export const checklogin = () => {
    return {
        type: "check_login",
    }

}

export const setusers = (data) => {
    return {
        type: "setusers",
        payload:data
    }
}


export const Logout = (data) => {
    return {
        type: "log_out",
        payload:data
    }

}
export const loggedIn = () => {
    return {
        type: "login",
    }

}