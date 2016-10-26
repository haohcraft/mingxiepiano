import React, { PropTypes } from 'react';
import './event.css';

const CalendarEvent = ({ cn = 'CalendarEvent', ...props }) => (
    <div className={cn}>
        <div className={`${cn}-info`}>
            <h1>{props.dateDay}</h1>
            <h6 className={`${cn}-info-date`}>{props.date}</h6>
            <h6 className={`${cn}-info-day`}>{props.day}</h6>
            <hr />
            <p className={`${cn}-info-city`}>{props.city}</p>
            {
                props.hallNanme &&
                    <p className={`${cn}-info-hallNanme`}>{props.hallNanme}</p>
            }
            {
                props.program &&
                    <p className={`${cn}-info-program`}>{props.program}</p>
            }
        </div>
    </div>
);
CalendarEvent.propTypes = {
    cn: PropTypes.string,
    dateDay: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    hallNanme: PropTypes.string,
    program: PropTypes.string
};

export default CalendarEvent;
