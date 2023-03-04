import React from 'react'
import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {

    const sendNotification = (e) => {
        e.preventDefault();

        const email = document.getElementById("Email").value;
        // console.log(email);

        if (email === ""){
            const changer = document.getElementById('Email').parentNode;
            changer.classList.add('error-input');

            const chgText = document.getElementById('chgText');
            chgText.innerText = "Whoops! It looks like you forgot to add your email";
        } 
        else if (!isValid(email)){
            const changer = document.getElementById('Email').parentNode;
            changer.classList.add('error-input');

            const chgText = document.getElementById('chgText');
            chgText.innerText = "Please enter a valid email address";
        } 
        else {
            const changer = document.getElementById('Email').parentNode;
            changer.classList.remove('error-input');

            alert(`A mail has been forwarded to ${email}`);
        }
    };

    function isValid(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <header>
            <img src={logo} alt="Logo" />
            <h1>We are launching <span className='lnch'>soon!</span></h1>
            <small>Subscribe and get notified</small>
            <form className="mail-visitor" onSubmit={sendNotification}>
                <div className="error">
                    <input type="text" id='Email' placeholder='Your email address' className="user-mail" />
                    <span id='chgText' className="error-message"></span>
                </div>
                <button type="submit" className="notify-btn" id="notify" >Notify Me</button>
            </form>
        </header>
    )
}

export default Header
