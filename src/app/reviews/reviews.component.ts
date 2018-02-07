import { Component, OnInit, Input } from '@angular/core';
import { gemModel } from '../../gemmodel';
import { reviewmodel } from '../../reviewmodel';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

    @Input() gem: gemModel;
    newreview: reviewmodel;
    
    
  constructor() { }
    
    submitClicked(){
        this.gem.reviews.push(this.newreview);
        this.ngOnInit();
    }

  ngOnInit() {
      this.newreview = {
          id: -1,
          createddate: "",
          body: "",
          rating: 5,
          author: ""
      }
  }

}
