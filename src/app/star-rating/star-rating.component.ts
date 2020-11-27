import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() rating:number;
  private auxRating:number;
  @Output() ratingCambiado = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  restoreRating(){
    this.auxRating=this.rating;

  }

  setRating(){
    this.ratingCambiado.emit(this.auxRating);
  }


}
