import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;
    
    //To allow the event (buttonclick) to bubble up to the lightning-layout-item, we add bubbles: true in the CustomEvent.
    handleButton(event) {
        console.log("button A");
      this.dispatchEvent(new CustomEvent('buttonclick',{
        bubbles: true
      }));
    }

}