import { Component } from '@angular/core';

@Component({
  selector: 'app-form-municipality',
  templateUrl: './form-municipality.component.html',
  styleUrls: ['./form-municipality.component.css'],
})
export class FormMunicipalityComponent {
  municipalities = [
    {
      id: 1,
      name: 'Caldas',
      department: 'Antioquia',
      dane: 12345,
      capitalDistrict: false,
    },
    {
      id: 2,
      name: 'Bogotá',
      department: 'Cundinamarca',
      dane: 23456,
      capitalDistrict: true,
    },
    {
      id: 3,
      name: 'Medellín',
      department: 'Antioquia',
      dane: 34567,
      capitalDistrict: false,
    },
    {
      id: 4,
      name: 'Chía',
      department: 'Cundinamarca',
      dane: 45678,
      capitalDistrict: false,
    },
  ];
  departments = [
    {
      id: 1,
      name: 'Antioquia'
    },
    {
      id: 2,
      name: 'Cundinamarca'
    },
    {
      id: 3,
      name: 'Bolivar'
    },
    {
      id: 4,
      name: 'Sucre'
    },
    {
      id: 5,
      name: 'Caldas'
    },
  ]
  showFormMunicipality: boolean = false;

  toggleForm() {
    this.showFormMunicipality =!this.showFormMunicipality
  }
}
