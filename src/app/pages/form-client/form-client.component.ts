import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { loadClients } from 'src/app/state/actions/client.actions';
import { selectClientsLoading } from 'src/app/state/selectors/client.selectors';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css'],
})
export class FormClientComponent {
  loading$: Observable<boolean> = new Observable();

  clients: Client[] = [];
  showAdd: boolean = false;
  showUpdate: boolean = false;
  showData: boolean = false;
  indexUpdate: number | null = null;
  indexData: number | null = null;
  img: string = 'http://localhost:4200/assets/icons/arrow-down.svg';
  nameAdd: string = '';
  nameUpdate: string | null = '';

  constructor(
    private store: Store<any>,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectClientsLoading);

    this.clientService.getDataFalse().subscribe((res) => {
      console.log(res);
      this.clients = res.data;
    });

    this.store.dispatch(loadClients());
  }

  toggleClient() {
    this.showAdd = !this.showAdd;
  }

  toggleUpdate(index: number | null, name: string | null) {
    this.indexUpdate = index;
    this.nameUpdate = name;
    this.showUpdate = !this.showUpdate;
  }

  toggleData(index: number) {
    if (this.indexData === index) {
      this.indexData = null;
    } else {
      this.indexData = index;
    }
    this.showData = !this.showData;
  }

  toggleImg(event: Event) {
    const element = event.target as HTMLImageElement;
    const arrowDown = 'http://localhost:4200/assets/icons/arrow-down.svg';
    const arrowUp = 'http://localhost:4200/assets/icons/arrow-up.svg';

    if (element.src === arrowDown) {
      this.img = arrowUp;
    } else {
      this.img = arrowDown;
    }
  }
}
