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
                    {/* <Items id={data[0].id} text={data[0].text} done={data[0].done} />
                    <Items id={data[1].id} text={data[1].text} done={data[1].done} />
                    <Items id={data[2].id} text={data[2].text} done={data[2].done} />
                    <Items id={data[3].id} text={data[3].text} done={data[3].done} /> */}
                </div> 
        </div>
    )
}