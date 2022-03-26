import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchableState, Ticket } from "../../model";

interface State<T> extends FetchableState<T> {
  searchResult: T;
}

const initialState: State<Ticket[]> = {
  loading: false,
  error: null,
  state: [],
  searchResult: [],
};

type SearchPayload = {
  departurePortId: string;
  arrivalPortId: string;
  departureDate: string;
};

const slices = createSlice({
  name: "ship",
  initialState: initialState,
  reducers: {
    setMaster: (state, action: PayloadAction<Ticket[]>) => {
      state.state = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error | null>) => {
      state.error = action.payload;
    },
    search: (state, action: PayloadAction<SearchPayload>) => {
      const filtered = state.state.filter((t) => {
        const departurePortIdMatched =
          t.departurePortId === action.payload.departurePortId;

        const arrivalPortIdMatched =
          t.arrivalPortId === action.payload.arrivalPortId;

        const departureDateMatched =
          t.departureDate === action.payload.departureDate;

        return (
          departureDateMatched && arrivalPortIdMatched && departurePortIdMatched
        );
      });

      state.searchResult = filtered;
    },
  },
});

export const { setMaster, setError, setLoading } = slices.actions;

export default slices.reducer;
