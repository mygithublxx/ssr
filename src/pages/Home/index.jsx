import React, { useState } from "react";
import styles from "./index.css";
import imurl from '../../assets/chengge.png'

export default function() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>首页 : {number}</h1>
      <img src={imurl}></img>
      <div className={styles.bgc}></div>
      <div>
        <button
          className={styles.beautybutton}
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          点击
        </button>
      </div>
    </div>
  );
}

