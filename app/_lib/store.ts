// app/_lib/store.ts
/* 
    A simple Redux store setup using Redux Toolkit.
    For authentication state management.
*/
import { configureStore } from "@reduxjs/toolkit";
export interface User {
  username: string;
}
const initialState : { user: User | null } = {
  user: null,
};

const ACTION = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
}

const store = configureStore({
  reducer: {
    auth: (state = initialState, action) => {
      switch (action.type) {
        case ACTION.LOGIN:
          return { ...state, user: action.payload };
        case ACTION.LOGOUT:
          return { ...state, user: null };
        default:
          return state;
      }
    },
  },
});

export default store;
