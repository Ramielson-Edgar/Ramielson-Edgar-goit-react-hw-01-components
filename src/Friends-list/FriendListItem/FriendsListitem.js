import React from "react";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";
import Styled from "styled-components";

const StatusColor = Styled.span`
width:  20px;
height: 20px;
margin-right: 20px;

border-radius: 100px;
background-color: ${(props) => (props.status ? "green" : "red")}
`;

function FriendListItem({ id, avatar, name, isOnline = true }) {
  const inOnline = isOnline ? true : false;

  return (
    <div className="wrapper">
      <li key={id} className={s.item}>
        <StatusColor status={inOnline}></StatusColor>
        <img className={s.imgSrc} src={avatar} alt="user" width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </div>
  );
}

FriendListItem.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
