import React, { Component } from 'react'

export default class Reminders extends Component {

    render() {
        return (
            <div className='reminders'>
                <h2 className='reminders__title title'>Reminders</h2>
                <ul className='reminders__categories'>
                    <li className='reminders__categories__el'>Working</li>
                    <li className='reminders__categories__el'>Personal</li>
                    <li className='reminders__categories__el'>Family</li>
                    <li className='reminders__categories__el'>Clients</li>
                </ul>  
            </div>
        )
    }
}
