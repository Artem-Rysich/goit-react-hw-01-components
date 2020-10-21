import React from 'react';
import frendsData from './../../Data/friends.json';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import styles from './FriendsList.module.css';

const FrendsLists = () => {
    return ( <
        ul className = { styles.list } > {
            frendsData.map(frendsData => ( <
                FriendsListItem key = { frendsData.id.toString() }
                avatar = { frendsData.avatar }
                name = { frendsData.name }
                isOnline = { frendsData.isOnline }
                />
            ))
        } <
        /ul>
    );
};

export default FrendsLists;