import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name
    handleClick(){
        this.isVisible = true
        console.log(this.isVisible)
    }
    

    get helloMethod(){
        return this.name === "hello"
    }
    changeHandler(event){
        this.name = event.target.value
    }

    //falsy value
    // x = 0, false, null, undefined, ""
}