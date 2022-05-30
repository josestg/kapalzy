import { Port, Ship, Ticket } from "../model";

const baseURL = "https://kapalzy-api.herokuapp.com";

export async function fetchAllTicket(): Promise<Ticket[]> {
  try {
    const res = await fetch(`${baseURL}/tickets`);
    const json = await res.json();
    return json as Ticket[];
  } catch (error) {
    return [];
  }
}

export async function getPortByID(id: string): Promise<Port> {
  try {
    const res = await fetch(`${baseURL}/ports/{id}`);
    const json = await res.json();
    return json as Port;
  } catch (error) {
    throw new Error("port not found");
  }
}

export async function getShipByID(id: string): Promise<Ship> {
  try {
    const res = await fetch(`${baseURL}/ships/{id}`);
    const json = await res.json();
    return json as Ship;
  } catch (error) {
    throw new Error("ship not found");
  }
}

export async function fetchAllPort(): Promise<Port[]> {
  try {
    const res = await fetch(`${baseURL}/ports`);
    const json = await res.json();
    return json as Port[];
  } catch (error) {
    return [];
  }
}
