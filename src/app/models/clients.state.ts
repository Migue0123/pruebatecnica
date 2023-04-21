import { Client } from "./client";

export interface ClientState {
  loading: boolean;
  clients: ReadonlyArray<Client[]>;
}
