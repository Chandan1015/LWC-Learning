import { LightningElement, api } from 'lwc';

export default class Child2ContactForm extends LightningElement {
    phone = ''
    email = ''

    phnumberChangeHandler(event){
        this.phone = event.target.value
        this.sendDataToParent()
    }
    emailChangeHandler(event){
        this.email = event.target.value
        this.sendDataToParent()
    }

    sendDataToParent(){
        this.dispatchEvent(new CustomEvent('contactChange',
            {detail:{phone:this.phone, email:this.email}}
        ))
    }
    @api reset(){
        this.phone = ''
        this.email = ''
        this.sendDataToParent()
    }
}