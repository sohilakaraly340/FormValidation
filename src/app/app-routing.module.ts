import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:'full'},
  {path:'table',component:TableComponent},
  {path:'form' ,component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
