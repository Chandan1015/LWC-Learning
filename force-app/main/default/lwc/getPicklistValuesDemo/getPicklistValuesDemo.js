import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
export default class GetPicklistValuesDemo extends LightningElement {

    selectedIndustry = ''
    industryOptions=[]
    recordTypeId
    selectedType = ''
    typeOptions =[]

    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJECT})
    wiredObjectInfo({data, error}){
        if(data){
            this.recordTypeId = data.defaultRecordTypeId
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getPicklistValues, {recordTypeId: '$recordTypeId', fieldApiName: TYPE_FIELD})
    typePicklist({data, error}){
        if(data){
            this.typeOptions = data.values.map(item=>({ label: item.label, value: item.value}))
        }
        if(error){
            console.error(error)
        }
    }

    // generatePicklist(data){
    //     return data.values.map(item=>({ label: item.label, value: item.value }))

    // }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }


    // Second Picklist for type
    @wire(getPicklistValues, {recordTypeId: '$recordTypeId', fieldApiName: INDUSTRY_FIELD})
    industryPicklist({data, error}){
        if(data){
            this.industryOptions = data.values.map(item=>({ label: item.label, value: item.value}))
        }
        if(error){
            console.error(error)
        }
    }
    handleTypeChange(event) {
        this.selectedType = event.detail.value;
    }

}
