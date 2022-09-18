import PropTypes from 'prop-types';
// import css from 'react';

const FeedbackOptions  = ({ options, setFeedback}) => {
    return (
        <ul>
            {options.map((item) => <li key={item}>
                <button  type='button' onClick={() => setFeedback(item)}>{item}
                </button>
            </li>)}
        </ul>
    )
};


export default FeedbackOptions ;


Notification .propTypes = {
  title: PropTypes.string.isRequired,
};