import { LightningElement, api } from 'lwc';

export default class Child1AccountForm extends LightningElement {
    accountName = ''
    accountNumber = ''
    isActive = false

    nameChangeHandler(event){
        this.accountName= event.target.value
        this.sendDataToParent()
    }
    accnumberChangeHandler(event){
        this.accountNumber = event.target.value
        this.sendDataToParent()
    }
    activeChangeHandler(event){
        this.isActive = event.target.checked
        this.sendDataToParent()
    }
    sendDataToParent(){
        this.dispatchEvent(
            new CustomEvent('accountchange',
                {detail:{name:this.accountName,number: this.accountNumber, active: this.isActive}}))
    }
    @api reset(){
        this.accountName = ''
        this.accountNumber = ''
        this.isActive = false
        this.sendDataToParent()
    }
}


