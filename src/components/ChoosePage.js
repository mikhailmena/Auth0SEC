import React from "react";
import SignupButton from "./SignupButton";
import LoginButton from "./Login-button"
import "./ChoosePage.css"
import { Row, Col } from "reactstrap";

const ChoosePage = () => {
    return (
        <div  id="chooseadv">
            <Row>
                <div id="blankdiv"></div>
            </Row>
            <Row>
                <Col>
                <SignupButton/>
                </Col>
                <Col>
                 <LoginButton/>
                </Col>
            </Row>
            

          
            
            {/* <img src={require('./fireside.gif')} alt="loading..." /> */}
            
           
        </div>
            

    )
    
}

export default ChoosePage;








// <p> 
//                 <a href="https://gfycat.com/entireenchantinggavial-darkest-dungeon">via Gfycat</a>
//                 </p> style='position:relative; padding-bottom:calc(56.25% + 44px)'