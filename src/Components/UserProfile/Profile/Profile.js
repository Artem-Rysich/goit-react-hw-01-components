import React from 'react';
import Description from '../Description/Description';
import Stats from '../Stats/Stats';
import { name, tag, location, avatar, stats } from './../../../Data/User.json';
import style from './Profile.module.css';

const Profile = () => {
    return ( <
        div className = { style.profile } >
        <
        Description name = { name }
        tag = { tag }
        location = { location }
        avatar = { avatar }
        />{' '} <
        Stats followers = { stats.followers }
        views = { stats.views }
        likes = { stats.likes }
        />{' '} <
        /div>
    );
};

export default Profile;