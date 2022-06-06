import React, {useEffect, useRef, useState} from "react";
import { MdAdd } from 'react-icons/md';
import { useRecoilState } from "recoil";
import { listDataAtom } from "../recoilState/atoms";

function Create() {

    const [listData, setListData] = useRecoilState(listDataAtom)
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")
    let nextId = useRef(5)
    console.log(nextId)
    function btnToggle() {
        setOpen(prevOpen => !prevOpen)
    }

   
     function onSubmit(e) {
          localStorage.getItem(JSON.stringify(listData))
          e.preventDefault();
              console.log("Submitted!")
              setListData(prevData => [...prevData, {
                   id: nextId.current,
                   text: inputValue,
                   done: false
              }])
              setOpen(false)
              nextId.current += 1
     }

     function onChange(e) {
          setInputValue(e.target.value)
     }


    return (
        
         <div className="input-container">
            {open && <div className="create-el">
                 <form className="input" onSubmit={onSubmit}>
                      <input className="input-el" type="text" placeholder="할 일을 입력 후, Enter를 누르세요" onChange={onChange}></input>
                 </form>    
            </div>}
            <div className={open ? "btn-open" : "btn-closed"} 
             onClick={btnToggle}
            >
            <MdAdd/>
            </div>
         </div>
         
    )
}

export default React.memo(Create)