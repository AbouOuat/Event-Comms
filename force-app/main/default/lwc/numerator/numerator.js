import { LightningElement, track } from 'lwc';

export default class Numerator extends LightningElement {

    // @track counter = 0;
    // handleIncrement() {
    //   this.counter++;
    // }
    // handleDecrement() {
    //   this.counter--;
    // }

  counter = 0;
  handleIncrement() {
    this.counter++;
  }
  handleDecrement() {
    this.counter--;
  }
  handleMultiply(event) {
    console.log("handleMultiply numerator");
    const factor = event.detail;
    this.counter *= factor;
  }

}