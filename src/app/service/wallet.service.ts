import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from '../model/Wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService implements OnInit {

  employees:Wallet[]=[]; // its not permanent
  httpClient: any;

  constructor() { 
    // this.employees.push(new Wallet(1,"Ford",25000.0));
    // this.employees.push(new Wallet(3,"Kumar",1000.0));
    // this.employees.push(new Wallet(5,"Amit",2000.0));
    // this.employees.push(new Wallet(2,"India",5000.0));
    
  }
  // getWallet():Wallet[]{
  //   return this.employees;
  // }

  // addWallet(newWallet:Wallet):void{

  //   this.employees.push(newWallet);
  // }

 
  // updateWalletById(employee:Wallet){
    
  // }   
  // deleteWalletById(id?:number):void{
  //   //return this.employees;
  //   this.employees.pop();
  // }




  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
