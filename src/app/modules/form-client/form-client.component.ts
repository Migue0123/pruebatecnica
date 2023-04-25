import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Client,
  ClientCreateDTO,
  ClientUpdateDTO,
} from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { loadClients } from 'src/app/state/actions/client.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectClients,
  selectClientsLoading,
} from 'src/app/state/selectors/client.selectors';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent {
  loading$: Observable<boolean> = new Observable();
  clients$: Observable<Client[]> = new Observable();
  clientToDelete: number = 0;

  showAdd: boolean = false;
  indexUpdate: number | null = null;
  indexData: number | null = null;
  arrowDown: string = 'assets/icons/arrow-down.svg';
  arrowUp: string = 'assets/icons/arrow-up.svg';
  clientId: number = 0;
  indexToDelete: number = 0;
  nameAdd: string = '';
  newName: string = '';

  constructor(
    private store: Store<AppState>,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectClientsLoading);
    this.clients$ = this.store.select(selectClients);

    this.clientService.updateClientList();

    this.store.dispatch(loadClients());
  }

  onCreateClient() {
    const dto: ClientCreateDTO = { name: this.nameAdd };
    this.clientService
      .createClient(dto)
      .subscribe(() => this.clientService.updateClientList());
    this.toggleClient();
  }

  onUpdateClient(id: number, name: string) {
    const dto: ClientUpdateDTO = { id: id, name: name };
    this.clientService.updateClient(dto).subscribe(() => {
      this.clientService.updateClientList();
    });
    this.toggleUpdate(null, '');
  }

  onDeleteClient(event: boolean) {
    if (event === true) {
      this.clientService
        .deleteClient(this.clientToDelete)
        .subscribe(() => this.clientService.updateClientList());
      this.indexToDelete === this.indexData ? (this.indexData = null) : null;
      this.clientToDelete = 0;
    }
  }

  toggleClient() {
    this.nameAdd = '';
    this.showAdd = !this.showAdd;
  }

  toggleUpdate(index: number | null, name: string) {
    this.indexUpdate = index;
    this.newName = name;
  }

  toggleData(clientId: number, index: number) {
    if (this.indexData === index) {
      this.indexData = null;
    } else {
      this.indexData = index;
    }
    this.toggleImg(clientId);
  }

  toggleImg(clientId: number) {
    if (clientId !== this.clientId) {
      this.clientId = clientId;
    } else {
      this.clientId = 0;
    }
  }

  openModal(clientId: number, index: number) {
    this.clientToDelete = clientId;
    this.indexToDelete = index;
  }
}
