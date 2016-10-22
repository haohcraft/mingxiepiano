import React, { PropTypes } from 'react';
import './style.css';

const Arrow = (props) => (
    <div className={`Arrow ${props.className}`}>
        {props.children}
    </div>
);
Arrow.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Arrow;
