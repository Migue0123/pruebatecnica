import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormClientComponent } from './form-client.component';
import { FormClientRoutingModule } from './form-client-routing.module';
import { FormDataComponent } from './components/form-data/form-data.component';
import { ModalWarningClientComponent } from './components/modal-warning-client/modal-warning-client.component';
import { FormsModule } from '@angular/forms';
import { ModalWarningDataComponent } from './components/form-data/components/modal-warning-data/modal-warning-data.component';

@NgModule({
  declarations: [
    FormClientComponent,
    FormDataComponent,
    ModalWarningClientComponent,
    ModalWarningDataComponent,
  ],
  imports: [CommonModule, FormClientRoutingModule, FormsModule],
  bootstrap: [FormClientComponent],
})
export class FormClientModule {}
