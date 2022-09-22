import PropsType from 'prop-types'

const TransactionItem =({type, amount, currency }) => {
    return (<tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>)
}

export default TransactionItem;

TransactionItem.propTypes = {
    type: PropsType.string.isRequired,
    amount: PropsType.string.isRequired,
    currency: PropsType.string.isRequired
}