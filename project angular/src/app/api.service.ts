import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Review } from "./models";
import { Tour } from "./models"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }

  getReviews():Observable<Review[]>{
    return this.client.get<Review[]>(`${this.BASE_URL}/api/reviews/`);
  }
  getTours(locid: number): Observable<Tour[]>{
    return this.client.get<Tour[]>(`${this.BASE_URL}/api/locations/${locid}/tours`);
  }
  createReviews(name: string,reviewText: string): Observable<Review>{
    return this.client.post<Review>(`${this.BASE_URL}/api/reviews/create/`,
      {
        'name': name,
        'text': reviewText,
      });
  }

}
