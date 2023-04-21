import { createReducer, on } from '@ngrx/store';
import { loadClients } from '../actions/client.actions';
import { ClientState } from 'src/app/models/clients.state';

export const initialState: ClientState = { loading: false, clients: [] };

export const clientReducer = createReducer(
  initialState,
  on(loadClients, (state) => {
    return { ...state, loading: true };
  })
);
