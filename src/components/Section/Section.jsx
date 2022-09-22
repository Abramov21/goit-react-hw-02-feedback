import PropTypes from 'prop-types';
// import css from 'react';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 >{title}</h1>
      <br />
      <h2 >Statistics:</h2>
      <br />
      {children}
    </>
  );
};


export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

// import s from "./Notification.module.css";
// import PropTypes from 'prop-types';

// function Notification({message}) {
//     return (
//         <p className={ s.notification}>{ message }</p>
//     )
// }

// export default Notification

// Notification.propTypes = {
//   message: PropTypes.string.isRequired
// }
