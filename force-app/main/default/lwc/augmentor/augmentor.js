import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {

    startCounter = 0;
    handleStartChange (event) {
        this.startCounter = parseInt(event.target.value);  
    }

    handleMaximizeCounter() {
        //this.template.querySelector('c-numerator').maximizeCounter();
        console.log(" startCounter Augmentor" );
        console.log(" startCounter Augmentor " + this.startCounter );
        this.template.querySelector('c-numerator').maximizeCounter({val : this.startCounter});
        console.log(" startCounter Augmentor B" );
      }

}