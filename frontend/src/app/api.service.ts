import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { DogListComponent } from './dog-list/dog-list.component';
import { Dog } from './dog'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://127.0.0.1:8000'

  constructor(private httpClient: HttpClient) { }

  public getDogs() {
    return this.httpClient.get<Dog[]>(`${this.apiURL}/dogs`);
  }

  public getDogDetail(){
    return this.httpClient.get<Dog[]>(`${this.apiURL}/dogdetail`);
}
}
