import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import styled from "styled-components";

const LiFlexWrap = styled.ul`
  display: flex;
  background-color: #7441ec;
  flex-wrap: ${(props) => props.sum && "wrap"};
`;

export default function Statistics({ title, stats }) {
  const isBigger = stats.length > 5;
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title ? title : null}</h2>

      <LiFlexWrap sum={isBigger}>
        {stats.map((stat) => (
          <li key={stat.id} className={s.item}>
            <span className={s.label}> {stat.label}</span>
            <span className={s.percentage}> {stat.percentage}</span>
          </li>
        ))}
      </LiFlexWrap>
    </section>
  );
}

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ),
};
