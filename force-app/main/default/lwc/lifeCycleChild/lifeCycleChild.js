import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    //component instance is created
    constructor(){
        super()
        console.log("Child Constructor called")
    }
    // element is inserted into the DOM
    connectedCallback(){
        console.log("Child connected callback called")
        throw new Error("Loading of Child Component Faild")
    }
    
    //fires when the component rendering is done
    renderedCallback(){
        console.log("Child rendered callback called")
    }
    // fires when the component is removed from the DOM
    disconnectedCallback(){
        alert("Child disconnectedCallback called")
    }
}