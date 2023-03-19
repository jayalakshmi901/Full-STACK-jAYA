import { Component } from '@angular/core';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';
import { Observable } from 'rxjs';
import {catchError, retry } from 'rxjs/operators';

// import 'rxjs/Rx';
//import { Observable } from 'rxjs';
//import 'rxjs/add/observable/of';
//import { Observable } from 'rxjs/observable';
// import { Subject } from "rxjs";
// import { fromEvent, Subject } from 'rxjs';
	


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  employee:Wallet=new Wallet();
  // employees: any;

  constructor(private WalletService:WalletService, private WalletBackendService:WalletBackendService) {}
  
  onSubmit(){
    console.log(this.employee);
    //this.WalletService.addWallet(this.employee);

    let WalletPost: Observable<any> =this.WalletBackendService.addWallet(this.employee);
    WalletPost.subscribe(
      {
        next:(data)=>{ 
          console.log(data);
        },
        error:(error)=>{ 
          console.log(error);
        },
        complete:()=>{ //
          console.log("Post request Completed...")
}
      }
    )
  }
}
