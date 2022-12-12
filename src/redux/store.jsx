import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import TodoReducer from "./TodoSlice";


const reducer = combineReducers({
    user: UserReducer,
    Todo:TodoReducer,
});

export const store = configureStore({reducer}); 


