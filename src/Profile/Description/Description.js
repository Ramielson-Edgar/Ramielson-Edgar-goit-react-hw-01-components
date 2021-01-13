import React from "react";
import PropTypes from "prop-types";
import s from "./description.module.css";

export default function Description({ user }) {
  const { avatar, name, location, tag } = user;
  return (
    <div className={s.description}>
      <img src={avatar} alt="Аватар пользователя" className={s.avatar} />

      <p className={s.name}>
        <strong>{name}</strong>
      </p>

      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
}

Description.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  name: "Незнакомец",
};

Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
