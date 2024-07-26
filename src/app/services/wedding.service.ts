import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {

  url = `https://api.alvinandkaynuptials.com/api/Wedding`;

  constructor(private http: HttpClient) {}

  public getNames(name): Promise<any> {
      return this.http.get<any>(`${this.url}?name=${name}`).toPromise()
  }

  public reserve(object) {
   return this.http.post<any>(`${this.url}`,object).toPromise();
  }
}
