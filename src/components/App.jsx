import Profile from './profiles';
import Statistics from './statistics';
import Friend from './friends';
import Transactions from './transactions';

import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friend friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
