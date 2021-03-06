import React from 'react';
import PropTypes from 'prop-types';

import styles from '../FriendsListItem/FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
    const status = isOnline ? styles.online : styles.offline;
    return ( <
        li className = { styles.item } >
        <
        span className = { status } > { isOnline } < /span>{' '} <
        img className = { styles.avatar }
        src = { avatar }
        alt = "avatar"
        width = "48" / >
        <
        p className = { styles.name } > { name } < /p>{' '} <
        /li>
    );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;