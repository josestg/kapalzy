import db from "../db";
import { Ticket } from "../model";

export function fetchAllTicket(): Promise<Ticket[]> {
  return Promise.resolve(db.tickets);
}
