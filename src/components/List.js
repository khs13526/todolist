import React, {useEffect, useState} from "react";
import Items from "./Items";
import { useRecoilState } from "recoil";
import { listDataAtom } from "../recoilState/atoms";
export default function List() {

const [listData, setListData] = useRecoilState(listDataAtom)

// useEffect(() => {
//     console.log(listData)
// },[])


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