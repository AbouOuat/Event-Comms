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

  
    //@api counter = 0;
  //counter = 1;

  //This code changes counter to a property with getter (get) and setter (set) functions. It also adds the priorCount and _currentCount properties.
  _currentCount = 0;
  priorCount = 0;
  @api
  get counter() {
    return this._currentCount;
  }

  set counter(value) {
    this.priorCount = this._currentCount;
    this._currentCount = value;
  }

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
  // maximizeCounter() {
  //   this.counter += 1000000;
  // }
  
  maximizeCounter (event) {
    console.log ( "maximizeCounter numToAdd A");

    const numToAdd = event.val;
    console.log ( "maximizeCounter numToAdd B");
    console.log ( "maximizeCounter numToAdd " + numToAdd);
    this.counter += numToAdd;
  }

  handleDividy(event) {
    //console.log("handleDividy numerator");
    const factor = event.detail;
    this.counter /= factor;
  }

}