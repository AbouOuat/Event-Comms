//import { LightningElement, track } from 'lwc';

import { LightningElement } from 'lwc';
export default class Numerator extends LightningElement {

    // @track counter = 0;
    // handleIncrement() {
    //   this.counter++;
    // }
    // handleDecrement() {
    //   this.counter--;
    // }

  counter = 1;
  handleIncrement() {
    this.counter++;
  }
  handleDecrement() {
    this.counter--;
  }
  handleMultiply(event) {
    //console.log("handleMultiply numerator");
    const factor = event.detail;
    this.counter *= factor;
  }

  handleDividy(event) {
    //console.log("handleDividy numerator");
    const factor = event.detail;
    this.counter /= factor;
  }

}