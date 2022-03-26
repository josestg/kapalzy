export const DefaultServiceClasses = {
  economy: {
    id: "Ekonomi",
    en: "Economy",
  },
  business: {
    id: "Bisnis",
    en: "Business",
  },
  executive: {
    id: "Eksekutif",
    en: "Executive",
  },
};

export type ClassType = keyof typeof DefaultServiceClasses;
export type OrderStatus = "completed" | "canceled";
export type Gender = "male" | "female";

export type ServiceClass = {
  name: string;
  price: Price;
};

export type Price = {
  currency: string;
  ammount: number;
};

export type Classes = {
  [key in ClassType]: ServiceClass;
};

export type Ship = {
  id: string;
  name: string;
  maxSeats: number;
  bookedSeets: number;
  classes: Classes;
};

export type Port = {
  id: string;
  name: string;
  location: Location;
};

export type Location = {
  province: string;
};

export type User = {
  name: string;
  sex: Gender;
  age: number;
};

export type Order = {
  id: string;
  ticket: string;
  userDetail: User;
  status: OrderStatus;
};

export type Ticket = {
  id: string;
  shipId: string;
  departurePortId: string;
  arrivalPortId: string;
  departureDate: string;
  derpatureTime: string[];
};

export interface FetchableState<T> {
  loading: boolean;
  error: Error | null;
  state: T;
}

export const ScreenNames = {
  Home: "Home",
  Orders: "Orders",
  Cancellations: "Cancellations",
  Others: "Others",
  HomeForm: "Forms",
  HomePreview: "Previews",
  HomeSummary: "Summaries",
};

export type ScreenNameKeys = keyof typeof ScreenNames;
