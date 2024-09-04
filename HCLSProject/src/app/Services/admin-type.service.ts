import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminTypes } from '../../Models/IAdminTypes';

@Injectable({
  providedIn: 'root'
})
export class AdminTypeService {
  HostUrl:string="http://localhost:20261";
  AdminTypeWebPath:string="/api/AdmtypWebAPI/";

  constructor(private Httpser:HttpClient) { }

  GetAllAdmintype():Observable<IAdminTypes[]>{
    return this.Httpser.get<IAdminTypes[]>(this.HostUrl+this.AdminTypeWebPath+"AllAdminTypes")
  }
}
