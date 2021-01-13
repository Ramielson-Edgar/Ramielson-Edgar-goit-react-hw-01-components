import React from "react";
import s from "./body.module.css";

function Body({ type, amount, currency }) {
  return (
    <tbody>
      <tr className={s.item}>
        <td className={s.value}>{type}</td>
        <td className={s.value}>{amount}</td>
        <td className={s.value}>{currency}</td>
      </tr>
    </tbody>
  );
}

export default Body;
