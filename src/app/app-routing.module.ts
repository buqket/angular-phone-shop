import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//mycomponents
import { AddPhoneComponent } from './components/add-phone/add-phone.component';
import { DetailPhoneComponent } from './components/detail-phone/detail-phone.component';
import { ListPhoneComponent } from './components/list-phone/list-phone.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-phone' },
  { path: 'list-phone', component: ListPhoneComponent },
  { path: 'add-phone', component: AddPhoneComponent },
  { path: 'edit-phone/:id', component: DetailPhoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
