import React from "react";
import PropTypes from "prop-types";
import s from "./stat.module.css";

export default function Stat({ followers, likes, views }) {
  return (
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
  );
}

Stat.propTypes = {
  listItem: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
    })
  ),
};
