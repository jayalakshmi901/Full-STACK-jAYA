import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UpdatewalletComponent } from './components/updatewallet/updatewallet.component';
import { DemoComponent } from './components/demo/demo.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayWalletComponent } from './components/display-wallet/display-wallet.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'details/:name', component: DetailsComponent},
  { path: 'employees', component: DisplayWalletComponent },
  { path: 'update/:id', component: UpdatewalletComponent },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
