import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/Wallet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  employee: Wallet={
    name: "", password: "",
    // getWallet: function (): void {
    //   throw new Error('Function not implemented.');
    // }
  };
  constructor(private router:Router){}
  displayUserform(){
    console.log("displayUserform()");
    console.log(this.employee);
  }
  Submitform(){
    console.log("submitLoginForm()");
    
    // if user is authorised navigate to home/dashboard page
    if(this.employee.name=="ford" && this.employee.password=="ford12345678")
      this.router.navigateByUrl("home");

  }
}
