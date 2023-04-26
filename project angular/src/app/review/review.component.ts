import { Component } from '@angular/core';
import { reviews } from '../reviews';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  selectedCategory = "All"
  reviewsList = [...reviews];

}
