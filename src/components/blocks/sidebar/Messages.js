import React, { Component } from 'react'

export default class Messages extends Component {
    constructor(props) {
        super(props)

        /* Bindings
        --------------------------------------------------------- */
        this.composeMessage = this.composeMessage.bind(this)
    }



    /* Lifecycle methods
    --------------------------------------------------------- */

    render() {
        return (
            <div className='messages'>
                <h2 className='messages__title title'>Messages</h2>
                <button className='messages__compose' onClick={this.composeMessage}>Compose</button>
                <ul className='messages__categories'>
                    <li className='messages__categories__el messages__categories__el--active'>Inbox</li>
                    <li className='messages__categories__el'>Sent Emails</li>
                    <li className='messages__categories__el'>Drafts</li>
                    <li className='messages__categories__el'>Spam</li>
                    <li className='messages__categories__el'>Other</li>
                </ul>
            </div>
        )
    }




    /* Methods
    --------------------------------------------------------- */
    composeMessage() {
        console.log('Compose message')
    }
}
