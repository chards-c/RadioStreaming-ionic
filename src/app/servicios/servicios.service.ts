import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http:HttpClient) { }

  getRadiosjson(){
    let url="/assets/data/radios.json"
    return this.http.get<any[]>(url);
  }
  
}
