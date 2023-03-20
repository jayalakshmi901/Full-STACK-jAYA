import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-addfunds',
  templateUrl: './addfunds.component.html',
  styleUrls: ['./addfunds.component.css']
})
export class AddfundsComponent {
  employees: Wallet[] = [];

  id: any;
  balance: any;
  errormsg?: string;
  msg?: string;
  constructor(private activatedRoute:ActivatedRoute,private WalletService: WalletService,private walletBackEndService:WalletBackendService) { }
 
    Submitfunds(id:number,balance:number){
    // this.employees =  this.WalletService.getWallet(); // load data from service to local array
     this.walletBackEndService.addFunds(id,balance).subscribe(
      {
        next: (data) => {
          this.employees = data;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
          this.msg="";
          this.errormsg=  JSON.stringify(err.error);  

        },
        complete: () => { 
          this.msg = "Funds Added Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
        }
        )
        console.log(id,balance);
      }
   
  }
