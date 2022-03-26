import { configureStore } from "@reduxjs/toolkit";
import port from "./reducers/port";
import ship from "./reducers/ship";
import ticket from "./reducers/ship";

const store = configureStore({
  reducer: {
    port,
    ship,
    ticket,
  },
});

export default store;
