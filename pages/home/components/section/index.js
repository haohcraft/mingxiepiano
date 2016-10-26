import React, { PropTypes } from 'react';
import './style.css';

const Section = ({ cn = 'Section', ...props }) => (
    <div className={cn}>
        <div className={`${cn}-head`}>
            <h6>{props.title}</h6>
            <hr></hr>
        </div>
        <div className={`${cn}-content`}>
            {props.children}
        </div>
    </div>
);
Section.propTypes = {
    cn: PropTypes.string,
    title: PropTypes.string
};

export default Section;
