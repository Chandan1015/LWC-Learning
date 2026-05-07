import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name' // refence to the name field
import EMAIL_FIELD from '@salesforce/schema/User.Email' // reference to the email field
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetails extends LightningElement {
    userId = Id
    userDetail

    //005gL000007cYr3QAE
    // @wire(adapter,adaptorConfig)
    //propertyOrMethod

    // Using Method from wire syntax^ ;  '$userId'is reactive
    // @wire(getRecord, {recordId : '005gL000007cYr3QAE', fields : ['User.Name', 'User.Email']})
    @wire(getRecord, {recordId : '$userId', fields})  // fields : [NAME_FIELD, EMAIL_FIELD]
    userDetailHandler({data, error}){ // ({data, error}) :destructuring
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }
    // Using Property
    @wire(getRecord, {recordId : '$userId', fields})
    userDetailProperty
}