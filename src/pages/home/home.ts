import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rollValue: number;

  constructor(
    public navCtrl: NavController

  ) {

  }

  rollDice() {
    var rand = Math.floor((Math.random() * 100) + 1);
    console.log(rand);
    return rand;
  }

  onClick() {
    this.rollValue = this.rollDice();
  }

}
