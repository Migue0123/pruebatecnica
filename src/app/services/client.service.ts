import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, ClientRes, Data, DataDTO, DataUpdateDTO } from '../models/client';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getDataFalse(): Observable<ClientRes> {
    return this.http.get<ClientRes>('https://pruebaapicidet.azurewebsites.net/api/client')
    /* const clients = [
      {
        id: 1,
        name: 'Ana',
        data: [
          {
            id: 1,
            clientId: 1,
            variable: 'Genero',
            value: 'M',
          },
        ],
      },
      {
        id: 2,
        name: 'Juan',
        data: [],
      },
      {
        id: 3,
        name: 'Pepito',
        data: [],
      },
      {
        id: 4,
        name: 'Jose',
        data: [],
      },
      {
        id: 5,
        name: 'Daniela',
        data: [],
      },
    ];

    return of(clients).pipe(delay(1500)); */
  }

  getClients() {
    this.http.get<Client>('');
  }

  createClient(name: string) {
    this.http.post<Client>('', {
      params: {
        name,
      },
    });
  }

  createData(params: DataDTO) {
    this.http.post<Data>('', {
      params: {
        params,
      },
    });
  }

  updateClient(id: number, name: string) {
    this.http.put<boolean>(`?id=${id}`, {
      params: {
        name,
      },
    });
  }

  updateData(id: number, dto: DataUpdateDTO) {
    this.http.put<boolean>(`?id=${id}`, {
      params: {
        dto,
      },
    });
  }

  deleteClient(id: number) {
    this.http.delete<boolean>(`${id}`);
  }

  deleteData(id: number) {
    this.http.delete<boolean>(`${id}`);
  }
}
