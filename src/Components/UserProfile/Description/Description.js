import React from 'react';
import PropTypes from 'prop-types';

import style from './Description.module.css';

const Description = ({ name, tag, location, avatar }) => {
    return ( <
        div className = { style.description } >
        <
        img src = { avatar }
        alt = "user avatar"
        className = { style.avatar }
        />{' '} <
        p className = { style.name } > { name } < /p>{' '} <
        p className = { style.tag } > @ { tag } < /p>{' '} <
        p className = { style.location } > { location } < /p>{' '} <
        /div>
    );
};

Description.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

export default Description;