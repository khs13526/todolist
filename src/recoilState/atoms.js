import { atom } from "recoil";

export const listDataAtom = atom({
    key: "listData",
    default :[  
      // {
      //   id: 1,
      //   text: "아침 산책",
      //   done: true
      // },
      // {
      //   id: 2,
      //   text: "오늘의 뉴스 읽기",
      //   done: false
      // },
      // {
      //   id: 3,
      //   text: "샌드위치 사 먹기",
      //   done: false
      // },
      // {
      //   id: 4,
      //   text: "리액트 공부하기",
      //   done: false
      // }

    ]
}) 

export const localListaDataAtom = atom({
  key: "localListDataAtom",
  default : false
})

export const nextIdAtom = atom({
  key: "nextIdAtom",
  default : 5
})