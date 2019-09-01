import React, { Component } from 'react'

import Profile from './blocks/sidebar/Profile'
import Messages from './blocks/sidebar/Messages'
import Reminders from './blocks/sidebar/Reminders'

import './sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <Profile />
                <Messages />
                <Reminders />
            </div>
        )
    }
}
