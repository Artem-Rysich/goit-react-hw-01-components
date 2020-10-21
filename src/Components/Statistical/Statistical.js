import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from './../../Data/Statistical-data.json';
import style from '../Statistical/Statistical.module.css';

function Statistics({ title }) {
    return ( <
        section className = { style.statistics } > {
            title && < h2 className = { style.title } > {
                (title = 'UPLOAD STATS') } < /h2>} <
            ul className = { style.list } > {
                statisticalData.map(item => ( <
                    li key = { item.id }
                    className = { style.item } >
                    <
                    span className = { style.label } > { item.label } < /span> <
                    span className = { style.percentage } > { item.percentage } % < /span> <
                    /li>
                ))
            } <
            /ul> <
            /section>
        );
    }

    Statistics.defaultProps = {
        title: ' ',
    };

    Statistics.propTypes = {
        title: PropTypes.string,
    };

    export default Statistics;