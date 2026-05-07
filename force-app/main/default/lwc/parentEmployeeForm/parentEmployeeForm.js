import { LightningElement } from 'lwc';

export default class ParentEmployeeForm extends LightningElement {

    showForm = false
    accountData = {}
    contactData = {}
    otherData = {}

    createNewHandler(event){
        this.showForm = true
    }

    handleAccountData(event){
        this.accountData = event.detail
    }
    handleontactData(event){
        this.contactData = event.detail
    }
    handleOtherData(event){
        this.otherData = event.detail
    }
    submitHandler(){
        console.log('Account:', this.accountData)
        console.log('Contact:', this.contactData)
        console.log('Other:', this.otherData)
        alert('Employee Form Submitted')
    }

    // createNewHandler(){
    //     this.accountData = {}
    //     this.contactData = {}
    //     this.otherData = {}
    //     this.template.querySelector('c-child1-account-form')?.reset();
    //     this.template.querySelector('c-child2-contact-form')?.reset();
    //     this.template.querySelector('c-child3-other-info')?.reset();
    // }

}