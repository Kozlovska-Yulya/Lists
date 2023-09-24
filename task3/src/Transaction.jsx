import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const formattedDate = moment(time).format('DD MMM');
  const formattedTime = moment(time).format('HH:mm');

  const formattedAmount = new Intl.NumberFormat('en-GB').format(amount);

  return (
    <ul className="transactions">
      <li className="transaction">
        <span className="transaction__date">{formattedDate}</span>
        <span className="transaction__time">{formattedTime}</span>
        <span className="transaction__assets">
          {from} → {to}
        </span>
        <span className="transaction__rate">{rate}</span>
        <span className="transaction__amount">{formattedAmount}</span>
      </li>
      ...
      {/* <li className="transaction">
        <span className="transaction__date">10 Jan</span>
        <span className="transaction__time">19:01</span>
        <span className="transaction__assets">EUR → USD</span>
        <span className="transaction__rate">1.1</span>
        <span className="transaction__amount">100</span>
      </li> */}
    </ul>
  );
};

export default Transaction;
