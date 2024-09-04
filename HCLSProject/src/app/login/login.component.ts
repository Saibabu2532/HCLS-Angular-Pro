import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  Username:string="";
  Password:string="";

  constructor(private route:Router,private admser:AdminService){}

  ngOnInit(): void {
    
  }
  
  btn_Login():void{
    //Check For user Creadentials
    this.admser.CheckLogin(this.Username,this.Password).subscribe((data:any)=>{
      if(data==null){
      alert("You are not Registered ");
      this.route.navigate(["register"]);
      }
      else{
        window.sessionStorage.setItem("login",data);
        window.sessionStorage.setItem("adminType",data.adminTypeId.toString());
        if(data.active==true){
          if(data.adminTypeId==10){
            this.route.navigate(["manageradmin"]).then(()=>{
             window.location.reload();
            });
          }else{
            this.route.navigate(["operationaladmin"]).then(()=>{
              window.location.reload();
            });
          }
        }else{
          //alert and Redirect to active Page
          alert("Please Update Your active Status");
          this.route.navigate(["active"]);
        }
         
      }
 
    });
 
  }


  btn_Cancel():void{
    this.Username="";
    this.Password="";
  }
}
