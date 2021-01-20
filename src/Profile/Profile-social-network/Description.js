import React from "react";
import PropTypes from "prop-types";
import s from "./description.module.css";

export default function Description({ user, followers, likes, views }) {
  const { avatar, name, location, tag } = user;
  return (
    <>
      <div className={s.description}>
        <img src={avatar} alt="Аватар пользователя" className={s.avatar} />

        <p className={s.name}>
          <strong>{name}</strong>
        </p>

        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.listItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>
            <strong>{followers} </strong>
          </span>
        </li>

        <li className={s.listItemCenter}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>
            <strong>{likes}</strong>
          </span>
        </li>

        <li className={s.listItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>
            <strong>{views}</strong>
          </span>
        </li>
      </ul>
    </>
  );
}

Description.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  name: "Незнакомец",
};

Description.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    })
  ),
};
