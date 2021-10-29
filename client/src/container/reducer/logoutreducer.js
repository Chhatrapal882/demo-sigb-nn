

const logoutReducer = (state = false, action) => {
    switch (action.type) {
        case 'log_out':
            return action.data.id
        default:
            return state
    }
}

export default logoutReducer
