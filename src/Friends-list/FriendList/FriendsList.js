import React from "react";
import PropTypes from "prop-types";

import s from "./friendsList.module.css";
import FriendsListitem from "../FriendListItem/FriendsListitem";

function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendsListitem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendsList.defaultProps = {};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
