import { LightningElement } from 'lwc';

export default class Sample1 extends LightningElement {

    name = ''
    age = 0
    email = ''
    isActive = false
    gender = ''
    country = ''
    address = ''

    genderOptions = [
        {label: 'Male', vlue: 'Male'},
        {label: 'Female', vlue: 'Female'}
    ]

    countryOptions = [
        {label: 'India', value: 'India'},
        {label: 'USA', value: 'USA'}
    ]

    nameChangeHandler(event) {
        this.name = event.target.value
    }

    ageChangeHandler(event) {
        this.age = event.target.value
    }

    emailChangeHandler(event) {
        this.email = event.target.value
    }

    activeChangeHandler(event) {
        this.isActive = event.target.checked
    }

    genderChangeHandler(event) {
        this.gender = event.detail.value
    }

    handleCountryChange(event) {
        this.country = event.detail.value
    }

    addressChangeHandler(event) {
        this.address = event.target.value
    }

    submitHandler() {
        alert('Form Submitted')
    }

}

