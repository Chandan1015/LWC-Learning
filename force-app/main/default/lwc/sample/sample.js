import Country from '@salesforce/schema/Asset.Country';
import { LightningElement, track } from 'lwc';

export default class Sample extends LightningElement {
    fullname = 'ABC'
    title = "aura"

    changeHandler(event){
        this.title = event.target.value
    }

    @track address = {
        city : "Melbourne",
        postcode : 2003,
        Country : "Australia"

    }
    trackHandler(event){
        // this.address = {...this.address, "city" : event.target.value}
        this.address.city = event.target.value 
    }

    users = ['Chandan', 'Rajesh', 'Raj']
    n1 = 10
    n2 = 20

    get firstUser(){
        return this.users[0].toUpperCase()
    }
    get sum(){
        return this.n1 + this.n2
    }

    //Conditional Rendering
    isVisible = false
    handleClick(){
        this.isVisible = true
    }
    changeHandler(event){
        this.name = event.target.value
    }
    get helloMethod(){
        return this.name === 'Hello'
    }
}