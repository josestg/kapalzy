import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchableState, Port } from "../../model";

const initialState: FetchableState<Port[]> = {
  loading: false,
  error: null,
  state: [],
};

const slices = createSlice({
  name: "port",
  initialState: initialState,
  reducers: {
    setMaster: (state, action: PayloadAction<Port[]>) => {
      state.state = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setMaster, setError, setLoading } = slices.actions;

export default slices.reducer;
