import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/index";
import {Dog} from '../dog'
import { ApiService } from '../api.service'
import {interval} from "rxjs/index";


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
      const interval$ = interval(1000);
      interval$.subscribe(val => console.log("stream 1" + val))
      this.currentDogs.subscribe(dog => console.log(dog))
      //console.log(this.currentDogs)
  }

}
