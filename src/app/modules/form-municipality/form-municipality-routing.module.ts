import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMunicipalityComponent } from './form-municipality.component';

const routes: Routes = [
  {
    path: '',
    component: FormMunicipalityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMunicipalityRoutingModule {}
