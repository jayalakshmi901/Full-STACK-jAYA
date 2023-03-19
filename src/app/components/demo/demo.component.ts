import { Component } from '@angular/core';
// import { Wallet } from 'src/app/model/Wallet';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title = 'welcome to My app'; //datamember
  //  imageSrc="../assets/images/picture.jpg";
   name="";
   password="";

   query:string="";
   field:string='id';
  
   employees:{id:number,name:string,salary:number}[]=[
     
     {id:500,name:"Maya",salary:7000},
     {id:400,name:"haya",salary:4000},
     {id:1000,name:"jaya",salary:3000},
   ]
   
  //  employee: Employee={id:0,name:"",salary:0};
   
   displayName(): void{
    // window.alert(this.name +" :"+this.password);
    console.log((this.name +" :"+this.password));
   }
   

  changeSortByFiled(field:string){

    this.field = field;
  }
  //  displayUserform(){
  //    console.log("displayUserform()");
  //    console.log(this.employee);
  //  }
}
