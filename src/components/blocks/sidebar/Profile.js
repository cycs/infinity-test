import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div className='sidebar__profile'>
                <figure className='sidebar__fig'>
                    <img className='sidebar__fig__pic' src="https://placeimg.com/200/200/people" alt="profil"/>
                    <figcaption className='sidebar__fig__name'>Chris Robinson</figcaption>
                </figure>
            </div>
        )
    }
}
