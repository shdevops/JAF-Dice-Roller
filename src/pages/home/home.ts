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
  // Generates number between 1 and 100 and rounds so there are no decimals
  rollDice() {
    var rand = Math.floor((Math.random() * 6) + 1);
    console.log(rand);
    return rand;
  }

  // Causes rollDice to activate upon button click in html and takes the result and assigns it to rollValue
  onClick() {
    this.rollValue = this.rollDice();
  }

}
