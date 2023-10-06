//import { LightningElement, track } from 'lwc';

import { LightningElement, api } from 'lwc';
export default class Numerator extends LightningElement {

    // @track counter = 0;
    // handleIncrement() {
    //   this.counter++;
    // }
    // handleDecrement() {
    //   this.counter--;
    // }

  
    @api counter = 0;
  //counter = 1;
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

  @api
  maximizeCounter() {
    this.counter += 1000000;
  }
  
  handleDividy(event) {
    //console.log("handleDividy numerator");
    const factor = event.detail;
    this.counter /= factor;
  }

}