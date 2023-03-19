import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayWalletComponent } from './components/display-wallet/display-wallet.component';
import { SearchPipe } from './pipes/search.pipe';
import { UpperPipe } from './pipes/upper.pipe';
import { SortPipe } from './pipes/sort.pipe';
import {HttpClientModule} from '@angular/common/http';
import { UpdatewalletComponent } from './components/updatewallet/updatewallet.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DemoComponent,
    HomeComponent,
    PageNotFoundComponent,
    DetailsComponent,
    DisplayWalletComponent,
    SearchPipe,
    UpperPipe,
    SortPipe,
    UpdatewalletComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
