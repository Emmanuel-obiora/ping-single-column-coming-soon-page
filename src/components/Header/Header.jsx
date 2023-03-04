import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <h1>We are launching <span className='lnch'>soon!</span></h1>
            <small>Subscribe and get notified</small>
            <div className="mail-visitor">
                <input type="text" placeholder='Your email address' className="user-mail" />
                <button className="notify-btn">Notify Me</button>
            </div>
        </header>
    )
}

export default Header
