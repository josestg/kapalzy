import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchableState, Port, Ticket } from "../../model";

interface State {
  derpature?: Port;
  arrival?: Port;
  derpatureDate?: string;
}

const initialState: State = {
  derpature: undefined,
  arrival: undefined,
  derpatureDate: undefined,
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
  },
});

export const { setDerpature, setArrival } = slices.actions;

export default slices.reducer;
