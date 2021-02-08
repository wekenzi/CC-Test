import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { LogComponent } from './components/log/log.component';

const routes: Routes = [
  {path: '', redirectTo: '/log', pathMatch: 'full'},
  {path: 'log', component:LogComponent},
  {path: 'payment', component:CreditCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
