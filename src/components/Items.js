import React, {useEffect, useState} from "react";
import { MdDone, MdDelete } from 'react-icons/md';
import data from "./data";

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
        <div className="add-el">
            {todoData.done ? <span className="checked" onClick={() => toggle()}><MdDone /></span> : <span className="unchecked" onClick={() => toggle()}></span> }
            {todoData.text} {todoData.done}
        </div>
    )
  }