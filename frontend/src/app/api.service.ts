import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { DogListComponent } from './dog-list/dog-list.component';
import { Dog } from './dog'
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://127.0.0.1:8000'

  constructor(private httpClient: HttpClient) { }

  public getDogs() {
    return this.httpClient.get<Dog[]>(`${this.apiURL}/dogs`);
  }

  public getDogDetail(): Observable<Dog[]> {
    return this.httpClient.get<Dog>(`${this.apiURL}/1/dogdetail`);
}
}
