import { Order, Port, Ship, Ticket } from "../model";

type Scheme = {
  ports: Port[];
  ships: Ship[];
  orders: Order[];
  tickets: Ticket[];
};

const db: Scheme = require("./db.json");

export default db;
