import Company from '@salesforce/schema/Lead.Company';
import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "BMW", "Audi", "Maruti", "Hyundai"]

    ceoList = [
        {
            id:1,
            Company:"Google",
            name: "Sunder"
        },
        {
            id:2,
            Company:"Apple",
            name: "Tim"
        },
        {
            id:3,
            Company:"Facebook",
            name: "Mark"
        },
        {
            id:4,
            Company:"Amazon",
            name: "Jeff"
        }
    ]
}