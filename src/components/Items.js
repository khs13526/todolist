import React from "react";
import { MdDone, MdDelete } from 'react-icons/md';
import nanoid from 'nanoid'

export default function Items(props) {


    return (
        <div className="add-el">
            {props.done ? <span className="checked" onClick={props.toggle}><MdDone /></span> : <span className="unchecked" onClick={props.toggle}></span> }
            {props.text}
        </div>
    )
  }