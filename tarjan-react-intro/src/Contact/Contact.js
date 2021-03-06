import React, { Component } from 'react';

class Contact extends Component {

    state = {
        firstName: '',
        lastName: '',
        bestImpression: ''
    }

    joinUs = () => {
        console.log('in joinUs');
        alert(`Thanks for joining us ${this.state.firstName}!`);
        this.setState({
            firstName: '',
            lastName: '',
            bestImpression: ''
        });
    } // end joinUs

    firstName = (event) => {
        console.log('event.target', event.target);
        this.setState({
            firstName: event.target.value
        });
    }

    lastName = (event) => {
        console.log('event.target', event.target);
        this.setState({
            lastName: event.target.value
        });
    }

    bestImpression = (event) => {
        console.log('event.target', event.target);
        this.setState({
            bestImpression: event.target.value
        });
    }

    emptyFields = () => {
        document.getElementById("emptyInputFields").reset();
    }


    render() {
        return (
            <div>
                <h2>Contact</h2>
                <form id="emptyInputFields">
                    <input type="text" placeholder="First Name" onChange={this.firstName} />
                    <input type="text" placeholder="Last Name" onChange={this.lastName} />
                    <input type="text" placeholder="Best Impression" onChange={this.bestImpression} />
                    <button onClick={this.joinUs}>Join Us!</button>
                </form>
                <p>{this.state.firstName} {this.state.lastName}'s Best Impression is {this.state.bestImpression}</p>
                <p>1-800-wemakeskits</p>
                <p>reactingActors87@react.com</p>
            </div>
        )
    }
}




export default Contact;