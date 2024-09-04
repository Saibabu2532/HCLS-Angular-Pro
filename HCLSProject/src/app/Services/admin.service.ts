import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from '../../Models/IAdmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  HostUrl:string="http://localhost:20261";
  AdminWebPath:string="/api/AdmWebAPI/";

  constructor(private Httpser:HttpClient) { }

  CheckLogin(em:string,pwd:string):Observable<IAdmin>{
   return this.Httpser.get<IAdmin>(this.HostUrl+this.AdminWebPath+"LoginByEmailAndPassword?Email="+em+"&Password="+pwd);
  }

  InsertAdmin(adm:IAdmin):Observable<number>{
   return this.Httpser.post<number>(this.HostUrl+this.AdminWebPath+"AdminRegistrations",adm)
  }
}

