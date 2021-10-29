import { combineReducers } from "redux";
import authReducer from "./authReducer";
import logoutReducer from "./logoutreducer";

export const rootReducer = combineReducers({
    user: authReducer,
    logoutuser:logoutReducer
})