import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent {
  @Output() incrementEventFired = new EventEmitter<number>();
  currentNumber = 1;
  incrementInterval:any;
  gameOn = false;

  onStartGame() {
    this.incrementInterval = setInterval(() => {
      this.incrementEventFired.emit(this.currentNumber);
      this.currentNumber += 1;
    }, 1000);
    this.gameOn = true;
  }

  onStopGame() {
    clearInterval(this.incrementInterval);
    this.gameOn = false;
  }
}
