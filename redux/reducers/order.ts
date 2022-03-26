import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassType, OrderStatus, Port } from "../../model";

interface State {
  derpature?: Port;
  arrival?: Port;
  derpatureDate?: string;
  passengers: number;
  serviceClass: ClassType;
  status: OrderStatus;
  tiketId: string;
}

const initialState: State = {
  derpature: undefined,
  arrival: undefined,
  derpatureDate: undefined,
  passengers: 1,
  serviceClass: "economy",
  status: "pending",
  tiketId: "",
};

const slices = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    setDerpature: (state, action: PayloadAction<Port>) => {
      state.derpature = action.payload;
    },
    setArrival: (state, action: PayloadAction<Port>) => {
      state.arrival = action.payload;
    },
    setPassenger: (state, action: PayloadAction<number>) => {
      state.passengers = action.payload;
    },
    setDerpatureDate: (state, action: PayloadAction<string>) => {
      state.derpatureDate = action.payload;
    },
    setServiceClass: (state, action: PayloadAction<ClassType>) => {
      state.serviceClass = action.payload;
    },
    setOrderStatus: (state, action: PayloadAction<OrderStatus>) => {
      state.status = action.payload;
    },
    setTicketID: (state, action: PayloadAction<string>) => {
      state.tiketId = action.payload;
    },
  },
});

export const {
  setDerpature,
  setArrival,
  setDerpatureDate,
  setPassenger,
  setServiceClass,
  setOrderStatus,
  setTicketID,
} = slices.actions;

export default slices.reducer;
