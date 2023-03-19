import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-display-wallet',
  templateUrl: './display-wallet.component.html',
  styleUrls: ['./display-wallet.component.css']
})
export class DisplayWalletComponent implements OnInit{
  employees: Wallet[] = [];

  msg: string = "";
  errorMsg: string = "";
  WalletBackendService: any;

  constructor(private router:Router,private WalletService: WalletService,private walletBackEndService:WalletBackendService) { }
  ngOnInit(): void {
    
    // this.employees =  this.WalletService.getWallet(); // load data from service to local array
     this.walletBackEndService.getWallet().subscribe(
      {
        next: (data: Wallet[]) => {
          console.log(data);
          this.employees = data;
        },
        error: (err: any) => {
          console.log(err);

        },
        complete: () => { }
      }
    )
   
  }

  deleteWalletById(id?: number): void {
    console.log("Delete emp id:" + id);
    if (window.confirm("Do you want to delete Wallet?"))
      this.walletBackEndService.deleteWalletById(id).subscribe(
        {
          next: (data: any) => { // success
            this.msg = "Wallet Deleted Successfully . Id:" + id;
            this.errorMsg = "";
            // to filter the employee having delted id

            this.employees = this.employees.filter((emp) => {
              console.log("emp.id:" + emp.id);
              console.log("id:" + id);

              if (emp.id != id) {
                console.log("true :" + emp.id);
                return true;
              }

              else {
                console.log("false :" + emp.id);
                return false;

              }
            }
            )
          }
        }
      )
  }
  // updateWalletById
  updateWalletById(emp:Wallet){
    console.log("update Wallet");
    console.log(emp);
    //this.router.navigate(['details',this.name]);
    this.router.navigate(['update',emp.id]);
  }
  
}

  