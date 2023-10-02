import { LightningElement, api } from 'lwc';

export default class Buttondiviser extends LightningElement {

    @api label
    @api icon
    handleButtonDiviser (event) {
        //on fair remonter un new event
        //console.log (" Bouton diviser click");
        this.dispatchEvent (new CustomEvent ('buttondiviserclick',{
            bubbles: true
          }));
    }

}