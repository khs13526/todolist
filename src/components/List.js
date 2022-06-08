import React, {useEffect, useRef, useState} from "react";
import Items from "./Items";
import { useRecoilState } from "recoil";
import { listDataAtom, localListaDataAtom } from "../recoilState/atoms";
export default function List() {

const [listData, setListData] = useRecoilState(listDataAtom)
const [localListaData, setLocalListData] = useRecoilState(localListaDataAtom)

useEffect(() => {

    setListData(JSON.parse(localStorage.getItem("listData")))

},[localListaData]) 

    return (
        <div className="list-el">
                <div className="item-el">
                    {listData.map((it,i) => {
                       return <Items key={it.id} i={i} />
                    })}
                </div> 
        </div>
    )
}