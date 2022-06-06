import React from "react";
import { useRecoilValue } from "recoil";
import { listDataAtom } from "../recoilState/atoms";

export default function Head() {
    const date = new Date()
    const dateEl = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`
    const dayEl = `${date.getDay()}`
    const day = ["일","월","화","수","목","금","토"]
    const listData = useRecoilValue(listDataAtom)

    return (
        <div>
         <div className="text-el">
                 <h1>{dateEl}</h1>
                 <p className="day-el">{day[dayEl]}요일</p>
                 <p className="todo-el">할 일 {listData.filter(it => !it.done).length}개 남음</p>
           </div>
        <hr className="line-el"/>
        </div>
    )
}