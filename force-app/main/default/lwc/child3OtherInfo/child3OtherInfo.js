import { LightningElement,api } from 'lwc';

export default class Child3OtherInfo extends LightningElement {

    otherInfo = ''

    otherChangeHandler(event){
        this.otherInfo = event.target.value
        this.sendDataToParent()
    }

    sendDataToParent(){
        this.dispatchEvent(
            new CustomEvent('otherchange', {
                detail: this.otherInfo
            }))
    }
    @api reset(){
        this.otherInfo = ''
        this.sendDataToParent()
    }

}