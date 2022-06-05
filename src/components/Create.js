import React, {useState} from "react";
import { MdAdd } from 'react-icons/md';

export default function Create() {

    const [open, setOpen] = useState(false)

    function btnToggle() {
        setOpen(prevOpen => !prevOpen)
        console.log("Clciked!")
        console.log(open)
    }

    return (
        
         <div className="input-container">
            {open && <div className="create-el">
                 <div className="input">
                      <input className="input-el" type="text" placeholder="할 일을 입력 후, Enter를 누르세요"></input>
                 </div>    
            </div>}
            <div className={open ? "btn-open" : "btn-closed"} 
             onClick={btnToggle}
            >
            <MdAdd/>
            </div>
         </div>
         
    )
}