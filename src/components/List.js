import React, {useState} from "react";
import Items from "./Items";

export default function List() {

    const [formData, setFormData] = useState({
        id:"",
        done: false
    })

    function toggle() {
        setFormData((prevData) => ({
            ...prevData,
            done: !prevData.done
        }))
    }

    return (
        <div className="list-el">
                <div className="item-el">
                    <Items text="아침 산책" done={formData.done} toggle={toggle}/>
                    <Items text="오늘의 뉴스 읽기" done={formData.done} toggle={toggle}/>
                    <Items text="샌드위치 사 먹기" done={formData.done} toggle={toggle}/>
                    <Items text="리액트 공부하기" done={formData.done} toggle={toggle}/>
                </div> 
        </div>
    )
}