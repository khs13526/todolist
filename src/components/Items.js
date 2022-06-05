import React, {useEffect, useState} from "react";
import { MdDone, MdDelete } from 'react-icons/md';

export default function Items(props) {

    const [todoData, setTodoData] = useState(props)


    function toggle() {
        setTodoData( {...todoData, done : !todoData.done} )

        // console.log(newArray)
    }
    useEffect(() => {

        console.log('props', props)
    }, [props])

    return (
        <div className="items-container">
         <div className={todoData.done ? "done-el" : "undone-el"}>
            {todoData.done ? <span className="checked" onClick={() => toggle()}><MdDone /></span> : <span className="unchecked" onClick={() => toggle()}></span> }
            {todoData.text}
         </div>    
            <div className="dlt-btn">
                <MdDelete/>
            </div>
        </div>
    )
  }