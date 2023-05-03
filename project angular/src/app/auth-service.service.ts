import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private http:HttpClient) { }
  login(data: any):Observable<any>{
    console.log("hello im here")
    return this.http.post(`${this.BASE_URL}/api/token/`, data);
  }
}
