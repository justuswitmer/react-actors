import React, { Component } from 'react';

class Contact extends Component {

    joinUs = () => {
        console.log('in joinUs');
        // this.setState({
        //     feeling: 'Clickalus',
        //     whatDayIsIt: 'Cage Day'
        //   });
        // }

    } // end joinUs
    render() {
        return (
            <div>
                <h2>Contact</h2>
                {/* <input type="text" placeholder="First Name" onChange={this.firstName} />
                <input type="text" placeholder="Last Name" onChange={this.lastName} />
                <input type="text" placeholder="Best Impression" onChange={this.bestImpression} /> */}
                <button onClick={this.joinUs}>Join Us!</button>
                <p>1-800-wemakeskits</p>
                <p>reactingActors87@react.com</p>
            </div>
        )
    }
}




export default Contact;