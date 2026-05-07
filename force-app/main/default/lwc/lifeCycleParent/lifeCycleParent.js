import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible = false
    constructor(){
        super()
        console.log("Partent Constructor called")
    }
    connectedCallback(){
        console.log("Parent connected callback called")
    }
    renderedCallback(){
        console.log("Parent rendered callback called")
    }
    // name
    // changeHandler(event){
    //     this.name = event.target.value
    // }
    handleClick(event){
        this.isChildVisible = !this.isChildVisible// toggle: 1st click false->true ;2nd click true->false
    }

    errorCallback(error,stack){
        console.log(error.message)
        console.log(stack)
    }

}