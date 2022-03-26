import { configureStore } from "@reduxjs/toolkit";
import port from "./reducers/port";
import ship from "./reducers/ship";
import ticket from "./reducers/ticket";

const store = configureStore({
  reducer: {
    port,
    ship,
    ticket,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
