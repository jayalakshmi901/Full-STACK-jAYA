import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallet } from '../model/Wallet';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';
//import * as Rx from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WalletBackendService {

  constructor(private httpClient:HttpClient) { }

  getWalletById(id:string|null):Observable<any>{
    return this.httpClient.get("http://localhost:8090/v1/wallet/"+ id);
  }
  addWallet(newWallet:Wallet):Observable<any>{
    let url:string = "http://localhost:8090/v1/wallet/";
    return this.httpClient.post(url,newWallet,{responseType:'json'});
  }
  getWallet():Observable<any>{
    return this.httpClient.get("http://localhost:8090/v1/wallet/wallets/");
  } 
 
 
  deleteWalletById(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8090/v1/wallet/"+id);
  }
 
  updateWalletById(employee:Wallet):Observable<any>{
    return this.httpClient.put("http://localhost:8090/v1/wallet/",employee);
  
}

}
