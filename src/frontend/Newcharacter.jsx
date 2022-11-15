import React, { useState, useRef } from 'react';
import StepWizard from "react-step-wizard";
import { Step1 } from "./wizardsteps/Step1.jsx"
import { Step2 } from "./wizardsteps/Step2.jsx"



export const NewCharacter = () => {
    const [useWizard, setUseWizard] = useState(false)
    const inputRef = useRef()

    function toggleWizard() {
        console.log("toggled")
        setUseWizard(!useWizard)
    }

return (
    <>
          {useWizard && 
                     <StepWizard >
                     <Step1 />
                     <Step2 />
                   </StepWizard> 
          }

   <button onClick={toggleWizard}>New Character</button>



    </>
  );
}