import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountController.findAccounts';
export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchkey =''
    accounts
    timer
    searchHandler(event){
        window .clearTimeout(this.timer);
        this.searchkey=event.target.value;
        this.searchkey = event.target.value;
        this.timer = setTimeout(()=>{
            this.callApex();
        },1000);
    }
    callApex(){
        findAccounts({searchKey:this.searchkey}).then(result=>{
            this.accounts=result;
        }).catch(error=>{
            console.log(error);
        })
    }
}