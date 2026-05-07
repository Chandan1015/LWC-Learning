import { LightningElement, api, track } from 'lwc';
import updateAccountPhone from '@salesforce/apex/AccountQuickActionController.updateAccountPhone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; // To show toast message

export default class UpdateAccountPhone extends LightningElement {

    @api recordId; // record id from quick action
    @track phone = ''; // To store user input

    // input value
    handleChange(event) {
        this.phone = event.target.value;
    }

    // Call Apex to update field
    handleUpdate() {
        updateAccountPhone({   
            recordId: this.recordId, 
            phoneValue: this.phone 
        })
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Phone updated successfully',
                    variant: 'success'
                })
            );
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,
                    variant: 'error'
                })
            );
        });
    }
}