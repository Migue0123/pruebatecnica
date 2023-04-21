import { Component, Input } from '@angular/core';
import { Data } from 'src/app/models/client';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent {

  @Input() data: Data[] = []
  /* {
    id: 0,
    clientId: 0,
    variable: '',
    value: ''
  } */

  showFormData: boolean = false

  toogleClient() {
    this.showFormData = !this.showFormData
  }
}
