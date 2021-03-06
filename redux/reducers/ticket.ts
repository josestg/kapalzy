import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchableState, Ticket } from "../../model";

interface State<T> extends FetchableState<T> {
  searchResult: T;
  ordered: T;
  canceled: T;
}

const initialState: State<Ticket[]> = {
  loading: false,
  error: null,
  state: [],
  searchResult: [],
  ordered: [],
  canceled: [],
};

type SearchPayload = {
  departurePortId?: string;
  arrivalPortId?: string;
  departureDate?: string;
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
    addOrder: (state, action: PayloadAction<Ticket>) => {
      const found = state.ordered.find((t) => t.id === action.payload.id);
      if (!found) {
        state.ordered.push(action.payload);
      }
    },
    cancelOrder: (state, action: PayloadAction<Ticket>) => {
      const foundIndex = state.ordered.findIndex(
        (t) => t.id === action.payload.id
      );
      if (foundIndex !== -1) {
        const removed = state.ordered.splice(foundIndex, 1);
        state.canceled.push(removed[0]);
      }
    },
    search: (state, action: PayloadAction<SearchPayload>) => {
      const { arrivalPortId, departureDate, departurePortId } = action.payload;

      const filtered = state.state.filter((t) => {
        const departurePortIdMatched = departurePortId
          ? t.departurePortId === departurePortId
          : true;

        const arrivalPortIdMatched = arrivalPortId
          ? t.arrivalPortId === arrivalPortId
          : true;

        const departureDateMatched = departureDate
          ? new Date(t.departureDate).toDateString() ===
            new Date(departureDate).toDateString()
          : true;

        return (
          departureDateMatched && arrivalPortIdMatched && departurePortIdMatched
        );
      });

      state.searchResult = filtered;
    },
  },
});

export const {
  setMaster,
  setError,
  setLoading,
  search: searchTicket,
  addOrder,
  cancelOrder,
} = slices.actions;

export default slices.reducer;
