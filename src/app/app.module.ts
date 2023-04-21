import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormClientComponent } from './pages/form-client/form-client.component';
import { FormMunicipalityComponent } from './pages/form-municipality/form-municipality.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { FormDataComponent } from './pages/form-client/components/form-data/form-data.component';
import { NameFieldComponent } from './pages/form-client/components/name-field/name-field.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { clientReducer } from './state/reducers/client.reducers';
import { ROOT_REDUCERS } from './state/app.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormClientComponent,
    FormMunicipalityComponent,
    WelcomeComponent,
    FormDataComponent,
    NameFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
