import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class ApexWireDemo extends LightningElement {
    accountList
    @wire(getAccountList)
    accounts

    
    @wire(getAccountList)
        accountsHandler({data, error}){
            if(data){
                this.accountList = data.map(item=>{
                    let newType = item.Type === 'Customer - channel'? 'Channel':
                    item.Type === 'Customer - Direct'? 'Direct' :'-------'
                    return {...item, newType}
                })
            }
            if(error){
                console.error(error)
            }
    }
}