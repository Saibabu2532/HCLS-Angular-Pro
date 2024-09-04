import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageradmin',
  templateUrl: './manageradmin.component.html',
  styleUrl: './manageradmin.component.css'
})
export class ManageradminComponent implements OnInit {


  constructor(private route:Router){}


  ngOnInit(): void {
    let sessionLogVal=window.sessionStorage.getItem("login");

    if(sessionLogVal==null){
      this.route.navigate(["login"]).then(()=>{
        window.location.reload();
      });

    }
  }

}
