import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./Signupbutton.css"
import logo from "../assets/purpshield.png"

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button id='signupbutton'
      className="btn  btn-block"
      onClick={() => loginWithRedirect({screen_hint: 'signup',})}
         style={{ backgroundImage: `url(${logo})` }}
    >
      <img src={logo} width='100px'></img>
      <span className='shield-text' >New <br></br>Adventure</span>
    </button>
  );
};

export default SignupButton;
<img style="display:none;" src="https://clipground.com/s.gif?ref=https%3A%2F%2Fwww.pinterest.com%2F&amp;uri=%2Fimage-post%2F76758-copyright-free-fantasy-art-2.jpg.html&amp;t=1668383693&amp;chanel=gallery"></img>