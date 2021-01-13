import React from "react";
import PropTypes from "prop-types";
import s from "./transactionHistory.module.css";
import Body from "../body";
import Head from "../head/Head";

function TransactionHistory({ items }) {
  return (
    <div className={s.wrapper}>
      <table>
        <Head type="Type" amount="Amount" currency="Currency" />
        {items.map(({ id, type, amount, currency }) => (
          <Body key={id} type={type} amount={amount} currency={currency} />
        ))}
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ),
};

export default TransactionHistory;
