export type ClassType = "economy" | "business" | "executive";
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