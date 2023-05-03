import { Component } from '@angular/core';
import { Review} from "../models";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent{
  reviews: Review[] = [];
  newName = ''
  newText = ''
  constructor(private api: ApiService) {
   this.getReviews();
  }
  getReviews(){
    this.api.getReviews().subscribe((data) =>{
      this.reviews = data;
    })
  }
  createReview(){
        this.api.createReviews(this.newName,this.newText).subscribe(data=>{
          this.reviews.push(data);
          this.newName = ''
          this.newText = ''
        });
  }

  }
