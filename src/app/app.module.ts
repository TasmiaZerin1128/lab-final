import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TakeInputsComponent } from './take-inputs/take-inputs.component';
import { ShowInputsComponent } from './show-inputs/show-inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    TakeInputsComponent,
    ShowInputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
