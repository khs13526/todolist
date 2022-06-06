import React, {useEffect, useState} from "react";
import { MdDone, MdDelete } from 'react-icons/md';
import { useRecoilState } from "recoil";
import { listDataAtom } from "../recoilState/atoms";

export default function Items(props) {

    const [listData, setListData] = useRecoilState(listDataAtom)


    function toggle() {
        setListData( listData.map((it,i) => {
            if(it.id === listData[props.i].id) {
                return {...it, done: !listData[props.i].done}
            } else {
            return it
            }
        }))
    }
    // useEffect(() => {
    //     console.log('props', listData[props.i].text)
    // }, [props])

    return (
        <div className="items-container">
         <div className={listData[props.i].done ? "done-el" : "undone-el"}>
            {listData[props.i].done ? <span className="checked" onClick={() => toggle()}><MdDone /></span> : <span className="unchecked" onClick={() => toggle()}></span> }
            {listData[props.i].text}
         </div>    
            <div className="dlt-btn">
                <MdDelete/>
            </div>
        </div>
    )
  }