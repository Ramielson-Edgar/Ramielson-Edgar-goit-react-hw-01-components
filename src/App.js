import React from "react";

import Description from "./Profile/Profile-social-network";
import user from "./Profile/user.json";

import data from "./StatisticsSection/stats.json";
import Statistics from "./StatisticsSection";

import friends from "./Friends-list/FriendList/friends.json";
import FriendList from "./Friends-list/FriendList/FriendsList";

import transactions from "./Transaction-history/Table/transactions.json";
import TransactionHistory from "./Transaction-history/Table/TransactionHistory";

import Container from "./Profile/Container/Container";

function App() {
  return (
    <>
      <Container>
        <Description
          user={user}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Container>

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
