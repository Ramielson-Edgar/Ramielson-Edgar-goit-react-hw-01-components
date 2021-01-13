import React from "react";
import s from "./container.module.css";

function Container({ children }) {
  return <div className={s.profile}>{children}</div>;
}

export default Container;
