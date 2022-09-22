import PropTypes from 'prop-types';
// import css from 'react';

const Notification  = ({ message }) => {
  return (
    <p>{message}</p>
  );
};


export default Notification ;

Notification .propTypes = {
  title: PropTypes.string.isRequired,
};