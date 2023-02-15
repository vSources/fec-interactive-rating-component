import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  onRatingButtonClick(ratingButton: RatingButton) {
    for (const iterator of this.ratingButtonsIndexes) {
      iterator.isChecked = false;
    }

    ratingButton.isChecked = !ratingButton.isChecked;
  }

  title = 'app';

  protected ratingButtonsIndexes: RatingButton[] = [
    {
      index: 1,
      isChecked: false,
    },
    {
      index: 2,
      isChecked: false,
    },
    {
      index: 3,
      isChecked: false,
    },
    {
      index: 4,
      isChecked: false,
    },
    {
      index: 5,
      isChecked: false,
    },
  ];
}

export interface RatingButton {
  index: number;
  isChecked: boolean;
}
