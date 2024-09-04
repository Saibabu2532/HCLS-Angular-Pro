import { Component, OnInit } from '@angular/core';
import { AdminTypeService } from '../Services/admin-type.service';
import { IAdminTypes } from '../../Models/IAdminTypes';
import { error } from 'console';
import { IAdmin } from '../../Models/IAdmin';
import { AdminService } from '../Services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageradminregistration',
  templateUrl: './manageradminregistration.component.html',
  styleUrl: './manageradminregistration.component.css'
})
export class ManageradminregistrationComponent implements OnInit{

  AdminTypeList!:IAdminTypes[];
  Adminn:IAdmin;

   constructor(private admtype:AdminTypeService,private admins:AdminService,private router:Router){
    this.Adminn={adminId:0,name:"",gender:"",password:"",email:"",address:"",active:true,adminTypeId:0}
   }

  ngOnInit(): void {
    this.admtype.GetAllAdmintype().subscribe(data=>{
      this.AdminTypeList=data;
    },error=>alert(error));
  }

   btn_Register():void{
     

    this.Adminn.adminTypeId=parseInt(this.Adminn.adminTypeId.toString());

    this.admins.InsertAdmin(this.Adminn).subscribe(data=>{
      alert(data+"Record Inserted Successfull");
      this.router.navigate(["login"]);
    },error=>alert(error));

   }

   btn_Cancel():void{
    
    this.router.navigate(["home"]);

   }
}
