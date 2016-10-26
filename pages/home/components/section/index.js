import React, { PropTypes } from 'react';
import { Arrow } from 'components'; // eslint-disable-line 
import './style.css';

const Section = ({ cn = 'Section', ...props }) => (
    <div className={cn}>
        <div className={`${cn}-head`}>
            <h2 className={`${cn}-head-title`}>{props.title}</h2>
            <hr></hr>
        </div>
        <div className={`${cn}-content`}>
            {props.children}
        </div>
        <div className={`${cn}-footer`}>
            {false && <Arrow className="arrow">view all</Arrow>}
        </div>
    </div>
);
Section.propTypes = {
    cn: PropTypes.string,
    title: PropTypes.string
};

export default Section;
