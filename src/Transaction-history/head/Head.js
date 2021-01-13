import React from "react";
import s from "./head.module.css";

function Head({ type, amount, currency }) {
  return (
    <thead>
      <tr className={s.item}>
        <th className={s.value}>{type}</th>
        <th className={s.value}>{amount}</th>
        <th className={s.value}>{currency}</th>
      </tr>
    </thead>
  );
}

export default Head;
