import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Dog } from '../dog'


@Component({
  selector: 'app-dogdetail',
  templateUrl: './dogdetail.component.html',
  styleUrls: ['./dogdetail.component.scss']
})

export class DogdetailComponent implements OnInit {

  constructor() { }
    dog: Dog
    dog = 'best dog ever'
      dog: Dog = {
      name: 'good dog',
      location: 'wherever'
    };
  ngOnInit() {

  }

}
