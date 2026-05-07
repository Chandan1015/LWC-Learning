import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class ApexImperativeDemo extends LightningElement {
    accounts
    handleClick(){
        getAccountList().then(result=>{ //Promise call 
            this.accounts=result;
        }).catch(error=>{
            console.log(error);
        })
    }
}