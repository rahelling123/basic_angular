import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {Dog} from '../dog'
import { ApiService } from '../api.service'


@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

  currentDogs: Observable<Dog[]>;
  constructor(private service : ApiService)
  { }

  ngOnInit() {
      this.currentDogs = this.service.getDogs()
  }

}
