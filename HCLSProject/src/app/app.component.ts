import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'HCLSProject';

  flagAnony:boolean=true;  //Default
  flagSecure:boolean=false;
  flagSecureMg:boolean=false;
  flagSecOpr:boolean=false;
  
   constructor(private router:Router){}

  ngOnInit(): void {

   let sessionLogVal= window.sessionStorage.getItem("login");
    if(sessionLogVal==null){
      this.flagAnony=true;
      this.flagSecure=false;
     

    }else{
      this.flagAnony=false;
      this.flagSecure=true;
     

     let sessionAdmType=window.sessionStorage.getItem("adminType");
   if(sessionAdmType=="10"){
    this.flagSecureMg=true;
    this. flagSecOpr=false;
    this.router.navigate(["manageradmin"]);
   }else{
    this.flagSecureMg=false;
    this. flagSecOpr=true;
    this.router.navigate(["operationaladmin"]);
     
   }


    }
  }

  btn_LogoutClick():void{
   window.sessionStorage.removeItem("login");
   window.sessionStorage.removeItem("adminType");
   window.sessionStorage.clear();
   this.router.navigate(["login"]).then(()=>{
    window.location.reload();
   });

  }




}
