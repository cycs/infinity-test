import React, { Component } from 'react'

import './emails.css'

export default class Emails extends Component {
    render() {
        return (
            <div className='emails'>
                <div className="emails__search">search</div>
                <div className="emails__messages">messages</div>
                <div className="emails__content">content</div>
            </div>
        )
    }
}
