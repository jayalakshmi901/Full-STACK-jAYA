import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';

@Component({
  selector: 'app-updatewallet',
  templateUrl: './updatewallet.component.html',
  styleUrls: ['./updatewallet.component.css']
})
export class UpdatewalletComponent implements OnInit{

  msg: string="";
  errorMsg: string="";
  // router: any="";
id:string| null="";
employee:Wallet= new Wallet();
  router: any;
  
  
  
 
constructor(private activatedRoute:ActivatedRoute, private walletService:WalletBackendService){
}
ngOnInit():void{
    
  this.id=this.activatedRoute.snapshot.paramMap.get("id");
  console.log("updateWalletById" +this.id);
  this.walletService.getWalletById(this.id). subscribe(
    {
      next: (data) => {
        this.employee = data;
        console.log(data);

      },
      error: (error) => {
        console.log(Error);

      }
    }
  )

}

updateWalletById(){
  console.log("Update emp:");
  console.log(this.employee);
  this.walletService.updateWalletById(this.employee).subscribe(
    {
      next:(data)=>{
        this.msg= "Wallet updated successfully";
        this.errorMsg= "";
        this.router.navigateByUrl("employees");
      },
      error:(err)=>{
        console.log(err.error);
        this.msg= "";
        this.errorMsg= JSON.stringify(err.error);//"Employee could not be updated successfully";

      }
    }
  )
}
}
