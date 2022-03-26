import db from "../db";
import { Port, Ticket } from "../model";

export function fetchAllTicket(): Promise<Ticket[]> {
  return Promise.resolve(db.tickets);
}

export function fetchAllPort(): Promise<Port[]> {
  return Promise.resolve(db.ports);
}
