import { LightningElement, wire } from 'lwc';
// we are telling x component to use the SAMPLEMC message channel
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
//to recive the data that is published by component A 
import { subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService'
export default class LmsComponentX extends LightningElement {
    
    recievedMessage = 'No Message published'
    subscription
    @wire(MessageContext)
    context 

    // to call the subscribeMessage method when the component loads/ (is connected to the DOM)
    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
        // subscribe(messageContext, messageChannel, listener, subscriberOption)
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{ this.handleMessage(message)}, {scope: APPLICATION_SCOPE})
        // we are storing the context of subscribe method in this.subscription
        
    }

    // to handle the message that is published by component A
    // handleMessage(message){
    //     this.recievedMessage = message.lmsData.value? message.lmsData.valu :'No Message published'
    //     // message.lmsData.valu : is empty will return 'No Message published'
    // }

    handleMessage(message){
        this.recievedMessage = message.lmsData
    }
    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }

}