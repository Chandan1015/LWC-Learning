import { LightningElement } from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    userNames = ["John", "Jane", "Jack", "Jill"]
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1');
        const userElements = this.template.querySelectorAll('.name');
        console.log(elem.innerText)
        Array.from(userElements).forEach(item => {
            console.log(item.innerText)
        })
    }
}