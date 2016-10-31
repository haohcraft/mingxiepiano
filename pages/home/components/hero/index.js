import React, { PropTypes } from 'react';
import { Arrow } from 'components'; // eslint-disable-line 
import cx from 'classnames';
import './style.css';

const Hero = ({ cn = 'Hero', ...props }) => (
    <div className={cx(cn, 'row')}>
        <div className={`${cn}-img col-md-6`}>
            <img src={props.imgUrl} />
        </div>
        <div className={`${cn}-feature col-md-6`}>
            <h5>The Latest</h5>
            <hr></hr>
            <h2 className={`${cn}-feature-quote`}>
                {`Ming won the 1st prize of the 7th International 
                    Piano Competition Panama City`}
            </h2>
            <h5 className={`${cn}-feature-link`}>
                {false && <Arrow className="yellow">Read More</Arrow>}
            </h5>
        </div>
    </div>
);
Hero.propTypes = {
    cn: PropTypes.string,
    imgUrl: PropTypes.string
};

export default Hero;
