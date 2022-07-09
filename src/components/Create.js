import { findAllByDisplayValue } from "@testing-library/react";
import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
import { MdAdd } from 'react-icons/md';
import { useRecoilState } from "recoil";
import { listDataAtom, localListaDataAtom, nextIdAtom } from "../recoilState/atoms";

function Create() {

    const [listData, setListData] = useRecoilState(listDataAtom)
    const [localListaData, setLocalListData] = useRecoilState(localListaDataAtom)
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const firstrun = useRef(false)

     function getId() {
          if(localStorage.getItem("id") !== null){
               return JSON.parse(localStorage.getItem("id"))
          }
          return 5
     }

     function setId() {
          return localStorage.setItem("id", JSON.stringify(getId()+1))
     }


     function btnToggle() {
        setOpen(prevOpen => !prevOpen)
     }

     function onSubmit(e) {
          e.preventDefault();
              setListData(prevData => [...prevData, {
                   id: getId(),
                   text: inputValue,
                   done: false
              }])
              setOpen(false)
              setId()
          // axios.post("https://crudcrud.com/api/d8e0fc9bb5cd4ef6bfb69747844e4de7/listdata/")
          // .then(res => console.log(res))
          // .catch(error => console.log(error))
          // .then()
     }
          
     function onChange(e) {
               setInputValue(e.target.value)
     }

     useEffect (() => {
          if(firstrun.current){
          localStorage.setItem("listData", JSON.stringify(listData))
          } else {
          firstrun.current = true
          }
          console.log("Rendered..", listData)
          setLocalListData(true)
     },[listData])

    return (
        
         <div className="input-container">
            {open && <div className="create-el">
                 <form className="input" onSubmit={onSubmit} >
                      <input className="input-el" type="text" placeholder="할 일을 입력 후, Enter를 누르세요" onChange={onChange}></input>
                 </form>    
            </div>}
            <div className={open ? "btn-closed" : "btn-open"} 
             onClick={btnToggle}
            >
            <MdAdd/>
            </div>
         </div>
         
    )
}

export default React.memo(Create)