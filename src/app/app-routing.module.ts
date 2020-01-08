import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
{path: 'register', component: RegisterComponent},
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{ path: 'customers',loadChildren: './customers/customers.module#CustomersModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
