import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIncrementEventFired(numberFired: number) {
    if (numberFired % 2 === 0) {
      this.evenNumbers.push(numberFired);
    } else {
      this.oddNumbers.push(numberFired);
    }
  }
}
