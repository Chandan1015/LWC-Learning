import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /**Data binding example */
    fullname = "Zero To Hero"
    title = "aura"

    changeHandler(event){
        this.title = event.target.value

    }

    /** @track binding example */
    @track address = {
        city : "Melbourne",
        postcode : 3008,
        country : "Australia"
    }
    trackHandler(event){
        this.address.city = event.target.value
        //this.address ={...this.address,"city":event.target.value} 
    }

    /** getter example */
    users = ["John", "Mark", "Nik"]
    num1 = 10
    num2 = 30

    get firstUser(){
        return this.users[0]//.toUpperCase()
    }

    // get secondUSer(){
    //     return this.users[1]
    // }
    // get add(){
    //     return this.num1 +this.num2
    // }
    
    get multiply(){
        return this.num1 * this.num2
    }
}

