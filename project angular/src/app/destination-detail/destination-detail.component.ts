import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Location , locations} from "../locations";
import {ApiService} from "../api.service";
import {Tour} from "../models";

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrls: ['./destination-detail.component.css']
})
export class DestinationDetailComponent  implements OnInit{
  location: Location = {
    id: 0,
    name: '',
    image: '',
  };
  tours: Tour[] = [];
  id: number = 0;
   constructor(private route: ActivatedRoute,private api: ApiService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.id = id;
      }
    });
    this.location = locations.filter(location => location.id === this.id)[0];
    this.getTours(this.id);
  }







  getTours(id: number){
     this.api.getTours(id).subscribe((data =>{
      this.tours = data;
      console.log('====================================');
      console.log(this.tours);
      console.log('====================================');
    })
     )
  }

}
