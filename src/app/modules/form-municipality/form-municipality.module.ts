import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormMunicipalityComponent } from './form-municipality.component';
import { ModalWarningMuniComponent } from './components/modal-warning-muni/modal-warning-muni.component';
import { FormsModule } from '@angular/forms';
import { FormMunicipalityRoutingModule } from './form-municipality-routing.module';

@NgModule({
  declarations: [FormMunicipalityComponent, ModalWarningMuniComponent],
  imports: [CommonModule, FormMunicipalityRoutingModule, FormsModule],
  bootstrap: [FormMunicipalityComponent],
})
export class FormMunicipalityModule {}
