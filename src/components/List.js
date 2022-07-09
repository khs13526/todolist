import React, { useEffect } from "react";
import Items from "./Items";
import { useRecoilState } from "recoil";
import { listDataAtom, localListaDataAtom } from "../recoilState/atoms";
function List() {
  const [listData, setListData] = useRecoilState(listDataAtom);
  const [localListaData, setLocalListData] = useRecoilState(localListaDataAtom);

  useEffect(() => {
    if (localStorage.getItem("listData") !== null) {
      setListData(JSON.parse(localStorage.getItem("listData")));
    } else {
      setListData([]);
    }
  }, [localListaData]);

  return (
    <div className="list-el">
      <div className="item-el">
        {listData.map((it, i) => {
          return <Items key={it.id} i={i} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(List);
