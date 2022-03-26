import db from "../db";
import { Port, Ship, Ticket } from "../model";

export function fetchAllTicket(): Promise<Ticket[]> {
  return Promise.resolve(db.tickets);
}

export function getPortByID(id: string): Promise<Port> {
  const found = db.ports.find((p) => p.id === id);
  if (!found) {
    throw new Error("port not found");
  }

  return Promise.resolve(found);
}

export function getShipByID(id: string): Promise<Ship> {
  const found = db.ships.find((p) => p.id === id);
  if (!found) {
    throw new Error("ship not found");
  }

  return Promise.resolve(found);
}

export function fetchAllPort(): Promise<Port[]> {
  return Promise.resolve(db.ports);
}
