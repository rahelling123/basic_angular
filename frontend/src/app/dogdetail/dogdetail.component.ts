import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Dog } from '../dog'


@Component({
  selector: 'app-dogdetail',
  templateUrl: './dogdetail.component.html',
  styleUrls: ['./dogdetail.component.scss']
})

export class DogdetailComponent implements OnInit {

  dogdetail : Dog[];

  constructor(private apiservice: ApiService) { }
    //  dog: Dog = {
    //  name: 'good dog',
    //  location: 'wherever'
    //}


  ngOnInit() {
    this.getDog();
  }

    getDog(): void {
      this.apiservice.getDogDetail().subscribe(dogdetail=> this.dogdetail = dogdetail)
      console.log('got the data i guess');
  }

}
