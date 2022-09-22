import PropTypes from 'prop-types';
import TransactionItem from "./transactionsItem";
import css from './transactions.module.css'

const Transactions = ({ items  }) => {
    return (<table className={css.transaction__history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
              <tbody>
                  {items.map((item) => <TransactionItem
                      key={item.id}
                      type={item.type}
                      amount={item.amount}
                      currency={item.currency} />)}
        </tbody>
      </table>);
};

export default Transactions;

Transactions.propTypes = {
  friends: PropTypes.array.isRequired,
};
