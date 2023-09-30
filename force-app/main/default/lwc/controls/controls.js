import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {

    handleAdd() {
        console.log ("Add A");
        this.dispatchEvent(new CustomEvent('add'));
        console.log ("Add B");
      }
      handleSubtract() {
        console.log ("subtract A");
        this.dispatchEvent(new CustomEvent('subtract'));
        console.log ("subtract B");
      }
}