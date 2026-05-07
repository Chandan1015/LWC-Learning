import { LightningElement } from 'lwc';

export default class EmployeeForm extends LightningElement {
    name = ''
    accountNumber = ''
    isActive = false
    phoneNumber = ''
    email = ''
    otherInfo = ''

    nameChangeHandler(event){
        this.name= event.target.value
    }
    accnumberChangeHandler(event){
        this.accountNumber = event.target.value
    }
    activeChangeHandler(event){
        this.isActive = event.target.checked
    }
    phnumberChangeHandler(event){
        this.phoneNumber = event.target.value
    }
    emailChangeHandler(event){
        this.email = event.target.value
    }
    otherChangeHandler(event){
        this.otherInfo = event.target.value
    }
    submitHandler(event){
        alert('Form Submitted')
    }
    createNewHandler(event){
        this.name = ''
        this.accountNumber = ''
        this.isActive = false
        this.phoneNumber = ''
        this.email = ''
        this.otherInfo = ''
    }
    
}