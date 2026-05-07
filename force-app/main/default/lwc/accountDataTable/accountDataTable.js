import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountData.getAccounts';

const COLUMNS = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Number', fieldName: 'AccountNumber' },
    { label: 'Type', fieldName: 'Type' },
    { label: 'Rating', fieldName: 'Rating' },
    { label: 'Industry', fieldName: 'Industry' }
];
export default class AccountDataTable extends LightningElement {

    columns = COLUMNS;
    accounts;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        }
        if (error) {
            console.error(error);
        }
    }
}