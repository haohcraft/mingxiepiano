import React, { PropTypes } from 'react';
import { Arrow } from 'components'; // eslint-disable-line 
import './style.css';

const Hero = ({ cn = 'Hero', ...props }) => (
    <div className={cn}>
        <div className={`${cn}-img`}>
            <img src={props.imgUrl} />
        </div>
        <div className={`${cn}-feature`}>
            <h5>The Latest</h5>
            <hr></hr>
            <h2 className={`${cn}-feature-quote`}>Ming is back</h2>
            <h5 className={`${cn}-feature-link`}>
                <Arrow className="yellow">Read More</Arrow>
            </h5>
        </div>
    </div>
);
Hero.propTypes = {
    cn: PropTypes.string,
    imgUrl: PropTypes.string
};

export default Hero;
