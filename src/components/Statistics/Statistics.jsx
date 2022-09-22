import PropTypes from 'prop-types';
// import css from 'react';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral {neutral}</p>
      <p>Total: {total}</p>
      <p>Positiv: {positivePercentage} %</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  positivePercentage: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};
