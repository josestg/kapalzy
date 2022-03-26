import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassType, Port } from "../../model";

interface State {
  derpature?: Port;
  arrival?: Port;
  derpatureDate?: string;
  passengers: number;
  serviceClass: ClassType;
}

const initialState: State = {
  derpature: undefined,
  arrival: undefined,
  derpatureDate: undefined,
  passengers: 0,
  serviceClass: "economy",
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
  },
});

export const {
  setDerpature,
  setArrival,
  setDerpatureDate,
  setPassenger,
  setServiceClass,
} = slices.actions;

export default slices.reducer;
