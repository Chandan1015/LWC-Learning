import { LightningElement, api } from 'lwc';
import getAccountRating from '@salesforce/apex/RefreshController.getAccountRating';
export default class RefreshCustomView extends LightningElement {
    
    @api recordId
    ratingValue
    renderedCallback(){
        this.fetchRating()
    }
    fetchRating(){
        getAccountRating({"accountId":this.recordId}).then(response=>{
           console.log(response);
           this.ratingValue=response[0].Rating;
        }).catch(error=>{
            console.log(error)
        })
    }
}