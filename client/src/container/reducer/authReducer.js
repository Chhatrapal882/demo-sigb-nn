

const authReducer = (state = 0, action) => {
    switch (action.type) {
        
        case 'setusers':
            return [action.payload]
            
        default:
            return state
    }
}

export default authReducer
