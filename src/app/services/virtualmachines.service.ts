import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {url} from '../url';

@Injectable({
  providedIn: 'root'
})
export class VirtualmachinesService {

  constructor(private http : HttpClient) { }

  getAllVMS() : Observable<any>{
    return this.http.get<any>(url +'/vms');
  }

  addVm(Vm :any): Observable<any>{
    return this.http.post<any>(url +'/vms', Vm)
  }
}
