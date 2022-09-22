import PropTypes from 'prop-types';
import FriendItem from '../friends/friendsList';
import css from './friends.module.css'

const Friend = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
          <FriendItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
      ))}
    </ul>
  );
}

export default Friend

Friend.propTypes = {
  friends: PropTypes.array.isRequired,
};