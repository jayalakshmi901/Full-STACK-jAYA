import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent {
  employees: Wallet[] = [];

  fromId: any;
  toId:any;
  balance: any;
  errormsg?: string;
  msg?: string;
  constructor(private activatedRoute:ActivatedRoute,private WalletService: WalletService,private walletBackEndService:WalletBackendService) { }
 
  tranferFunds(fromId:number, toId:number,balance:number){
    // this.employees =  this.WalletService.getWallet(); // load data from service to local array
     this.walletBackEndService. tranferFunds(fromId,toId,balance).subscribe(
      {
        next: (data) => {
          this.msg = "Funds Tranfered Successfully";
          this.employees = data;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
          this.msg="";
          this.errormsg=  JSON.stringify(err.error);  

        },
        complete: () => { 
          this.msg = "Funds Transfered Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
        }
        )
        // console.log(id,balance);
      }
}
