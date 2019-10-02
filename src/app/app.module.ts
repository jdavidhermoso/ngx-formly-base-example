import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegularFormComponent } from './regular-form/regular-form.component';
import { NgxFormComponent } from './ngx-form/ngx-form.component';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  declarations: [
    AppComponent,
    RegularFormComponent,
    NgxFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    FormlyModule.forRoot(),
      FormlyMaterialModule
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
