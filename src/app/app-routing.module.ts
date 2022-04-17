import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowInputsComponent } from './show-inputs/show-inputs.component';
import { TakeInputsComponent } from './take-inputs/take-inputs.component';

const routes: Routes = [
  {path: '', component: TakeInputsComponent},
  {path: 'view', component: ShowInputsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
