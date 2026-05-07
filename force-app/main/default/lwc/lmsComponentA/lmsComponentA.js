import { LightningElement, wire } from 'lwc';
// SAMPLEMC is message channel
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { publish, MessageContext } from 'lightning/messageService'
export default class LmsComponentA extends LightningElement {

    inputValuen // used to store the value of the input field

    @wire(MessageContext)
    context // message context

    inputHandler(event){
        this.inputValue = event.target.value 
    }
    publishMessage(){
        const message = {
            lmsData: this.inputValue
        }
        // publish the message to the message channel
        // publish(messageContext, messageChannel, message)
        publish(this.context, SAMPLEMC, message)

    }
} 