import { ActionReducerMap } from "@ngrx/store";
import { ClientState } from "../models/clients.state";
import { clientReducer } from "./reducers/client.reducers";

export interface AppState {
  clients: ClientState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  clients: clientReducer
}
